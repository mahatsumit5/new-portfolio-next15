"use server";

import { connectToDatabase } from "../index";
import Tags from "../models/tags.model";

export const createTags = async (name: string) => {
  try {
    await connectToDatabase();

    const tag = await Tags.create(name);

    if (tag?._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "New tag added",
          tag,
        })
      );
    } else {
      throw new Error("Error creating new tag");
    }
  } catch (error) {
    if (error.message.includes("E11000")) {
      error.message = "Tag already exists";
    }
    return JSON.parse(
      JSON.stringify({
        status: "error",
        message: error.message,
      })
    );
  }
};
export const getAlltags = async () => {
  try {
    await connectToDatabase();

    const tags = await Tags.find();

    if (tags?.length) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "these are your tags",
          tags,
        })
      );
    } else {
      throw new Error("No tags available");
    }
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        status: "error",
        message: error.message,
      })
    );
  }
};
