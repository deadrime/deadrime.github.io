import Image from "next/image";
import { ImageUploader } from "@/components/ImageUploader";

const TestModal = () => {

}

// if (window.visualViewport) {
//   function resizeHandler() {
//       for (const sessionView of document.getElementsByClassName('SessionView')) {
//           sessionView.style.height = window.visualViewport.height.toString() + 'px';
//           document.getElementsByTagName('html')[0].style.height = window.visualViewport.height.toString() + 'px';
//       }
//   }

//   window.visualViewport.addEventListener('resize', resizeHandler);
// }

export default function Home() {
  const upload = () => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImageUploader />
    </main>
  );
}
