import BlogIllustrationSrc from "./assets/illustration-article.svg";
import AvatarSrc from "./assets/image-avatar.webp";

export default function App() {
  return (
    <div className="min-h-screen bg-yellow py-4 px-5 flex items-center justify-center">
      <div className="w-full max-w-80 bg-white border border-gray-950 p-5 rounded-3xl space-y-3 shadow-3xl">
        <div>
          <img src={BlogIllustrationSrc} className="rounded-lg" alt="" />
        </div>
        <span className="text-gray-950 bg-yellow font-extrabold inline-block py-2 px-4 rounded-sm">
          Learning
        </span>
        <p className="font-medium text-gray-950">Published 21 Dec 2023</p>
        <div className="space-y-3 pt-2">
          <h1 className="text-xl text-gray-950 font-black hover:text-yellow cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p>
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
          <div className="flex items-center justify-start gap-2 pt-3">
            <div>
              <img
                src={AvatarSrc}
                className="rounded-full size-10"
                alt="Greg Hooper Profile Picture"
              />
            </div>
            <p className="font-black text-gray-950">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
}
