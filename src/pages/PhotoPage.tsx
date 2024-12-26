import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPhotoDetails } from "../api/unsplashApi";
import { IoIosArrowBack } from "react-icons/io";

const PhotoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: photo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["photo", id],
    queryFn: () => fetchPhotoDetails(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !photo) {
    return <p>Error: Could not fetch photo details.</p>;
  }

  return (
    <div className="h-full bg-gray-50 p-6 pt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 p-4 text-gray-700 hover:text-green-500 transition duration-150 bg-gray-200 rounded-lg shadow-lg mb-4"
      >
        <IoIosArrowBack className="w-6 h-6 text-gray-700" />
        <span className="font-medium text-lg">Back</span>
      </button>
      <div className="max-w-4xl mx-auto bg-white pt-6 shadow-lg rounded-lg overflow-hidden">
        {/* Photo Details */}

        <img
          src={photo.urls.full}
          alt={photo.alt_description || "Photo"}
          className="w-full h-96 object-contain rounded-lg shadow-md"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {photo.alt_description || "Untitled"}
          </h1>
          <p  className="text-gray-600" >
          Photographer:
            <span className="font-medium text-green-500">
              {" "}
              {photo.user.name}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Dimensions:</span> {photo.width} x{" "}
            {photo.height} pixels
          </p>
          <a
            href={photo.user.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-green-500 px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Visit Photographer's Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
