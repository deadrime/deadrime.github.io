'use client';

export const ImageUploader = () => {
  return (
    <div>
      <input type="file" onChange={async (e) => {
        if (!e.target.files?.length) {
          return;
        }
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        try {
          // You can write the URL of your server or any other endpoint used for file upload
          const result = await fetch("/api/images", {
            method: "POST",
            body: formData,
          });

          const data = await result.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }} />
    </div>
  );
};
