import { db } from "../db/db"
import { Photo } from "../models/photos"

interface PhotoServices {
  updateLikes(id: string, inc: number): Promise<Photo>
  createPhoto(photo: Photo): Promise<string>
  createComment(id: string, comment: string): Promise<Photo>
  getAllPhotos(): Promise<Photo[]>
}

const photosCollection = db.collection<Photo>("photos")

export const getAllPhotos = async (): Promise<Photo[]> => {
  const photos = await photosCollection.find().toArray()

  return photos
}
