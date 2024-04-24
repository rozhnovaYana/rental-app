import cloudinary from "@/config/cloudinary";

export const deleteImagesFromCloudinary = async (images: string[]) => {
  const deleteImagesFromCloudinaryPromises = images?.map((image: string) => {
    const url = image?.match(/\/([^\/]+)(?=\.\w+$)/)?.[1];
    return url ? cloudinary.uploader.destroy(`rental-app/${url}`) : () => {};
  });

  await Promise.all(deleteImagesFromCloudinaryPromises);
};
export const uploadImagesToCloudinary = async (images: string[]) => {
  const promises = [];
  for (const image of images) {
    const res = await cloudinary.uploader.upload(image, {
      folder: "rental-app",
    });
    promises.push(res.secure_url);
  }
  const uploadedImages = await Promise.all([...promises]);
  return uploadedImages;
};
