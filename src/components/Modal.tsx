import React from 'react';

interface ModalProps {
  photo: any;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ photo, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg relative w-4/5 max-w-4xl">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-xl font-bold">X</button>
        <img src={photo.urls.full} alt={photo.alt_description} className="w-full h-auto rounded-lg" />
        <div className="mt-4">
          <h3 className="font-semibold">Photo by {photo.user.name}</h3>
          <p className="text-gray-600">{photo.description || 'No description available'}</p>
          <p className="mt-2">Width: {photo.width}px | Height: {photo.height}px</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
