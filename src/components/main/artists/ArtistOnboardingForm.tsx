"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mic2 } from "lucide-react";
import {
  Input,
  Textarea,
  Button,
  Label,
  MultiSelectDropdown,
} from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = ["Singer", "Magician", "Dancer", "Comedian"];
const LANGUAGES = ["Hindi", "English", "Tamil", "Punjabi"];
const FEES = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹30,000",
  "Above ₹30,000",
];

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is required").required("Name is required"),
  bio: Yup.string().min(10, "Bio must be at least 10 characters").required(),
  category: Yup.array().min(1, "Select at least one category").required(),
  languages: Yup.array().min(1, "Select at least one language").required(),
  fee: Yup.string().required("Select a fee range"),
  location: Yup.string().min(2, "Location is required").required(),
  image: Yup.mixed().nullable(),
});

export default function ArtistOnboardingForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Artist Submitted:", values);
      alert("Artist submitted! Check console.");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Mic2 /> Artist Onboarding
      </h1>
      <p className="text-muted-foreground mb-6">
        Fill out the form below to showcase your talent and join our platform.
      </p>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Artist Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              name="bio"
              id="bio"
              onChange={formik.handleChange}
              value={formik.values.bio}
              onBlur={formik.handleBlur}
              placeholder="Tell us about yourself..."
              rows={4}
            />
            {formik.touched.bio && formik.errors.bio && (
              <p className="text-red-500 text-sm">{formik.errors.bio}</p>
            )}
          </div>

          <div>
            <Label>Category</Label>
            <MultiSelectDropdown
              label="Category"
              options={CATEGORIES}
              selected={formik.values.category}
              onChange={(val) => formik.setFieldValue("category", val)}
            />
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}
          </div>

          <div>
            <Label>Languages Spoken</Label>
            <MultiSelectDropdown
              label="Languages"
              options={LANGUAGES}
              selected={formik.values.languages}
              onChange={(val) => formik.setFieldValue("languages", val)}
            />
            {formik.touched.languages && formik.errors.languages && (
              <p className="text-red-500 text-sm">{formik.errors.languages}</p>
            )}
          </div>

          <div>
            <Label htmlFor="fee">Fee Range</Label>
            <select
              name="fee"
              id="fee"
              onChange={formik.handleChange}
              value={formik.values.fee}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Fee Range</option>
              {FEES.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            {formik.touched.fee && formik.errors.fee && (
              <p className="text-red-500 text-sm">{formik.errors.fee}</p>
            )}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              name="location"
              id="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              onBlur={formik.handleBlur}
              placeholder="e.g., Mumbai"
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-sm">{formik.errors.location}</p>
            )}
          </div>

          <div>
            <Label htmlFor="image">Profile Image (optional)</Label>
            <Input
              type="file"
              name="image"
              id="image"
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files?.[0])
              }
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
