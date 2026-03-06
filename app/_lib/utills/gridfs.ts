import mongoose from "mongoose";

export type UploadedFile = {
    fileId: string;
    filename: string;
    contentType: string;
};

export async function uploadFilesToGridFS(
    files: File[],
    options?: { bucketName?: string; folder?: string }
): Promise<UploadedFile[]> {
    const bucketName = options?.bucketName ?? "uploads";
    const folder = options?.folder?.trim();

    if (!mongoose.connection?.db) {
        throw new Error("MongoDB connection is not ready. Call connectDB() first.");
    }

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName,
    });

    const uploaded: UploadedFile[] = [];

    for (const file of files) {
        const buffer = Buffer.from(await file.arrayBuffer());

        const finalName = folder ? `${folder}/${file.name}` : file.name;

        const uploadStream = bucket.openUploadStream(finalName, {
            metadata: { contentType: file.type },
        });

        uploadStream.end(buffer);

        await new Promise<void>((resolve, reject) => {
            uploadStream.on("finish", () => resolve());
            uploadStream.on("error", reject);
        });

        uploaded.push({
            fileId: uploadStream.id.toString(),
            filename: finalName,
            contentType: file.type,
        });
    }

    return uploaded;
}