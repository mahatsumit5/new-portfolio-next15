"use server";

import { connectToDatabase } from "../index";
import Skill from "../models/skills.model";

export const createSkills = async (obj) => {
  try {
    await connectToDatabase();

    const skill = await Skill.create(obj);

    if (skill?._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "Your skill has been created",
          data: skill,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error creating new skill.",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getAllSkills = async (obj) => {
  try {
    await connectToDatabase();

    const skills = await Skill.find();

    if (skills?.length) {
      return JSON.parse(JSON.stringify(skills));
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error getting  skill.",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getActiveSkills = async (obj) => {
  try {
    await connectToDatabase();

    const skills = await Skill.find({ status: "Active" });

    if (skills?.length) {
      return JSON.parse(JSON.stringify(skills));
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error getting  skill.",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteSkillsById = async (id) => {
  try {
    await connectToDatabase();
    const skills = await Skill.findByIdAndDelete(id);
    if (skills._id) {
      return JSON.parse(JSON.stringify(skills));
    } else {
      return JSON.parse(JSON.stringify({ status: "error" }));
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateSKill = async (obj) => {
  try {
    const { _id, ...rest } = obj;
    await connectToDatabase();
    const skill = await Skill.findByIdAndUpdate(_id, rest, { new: true });
    if (skill._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "Update successfull",
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "error updating",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
