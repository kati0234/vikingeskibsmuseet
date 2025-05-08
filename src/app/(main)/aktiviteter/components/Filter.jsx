// import Link from "next/link";
// import Image from "next/image";
// import Button from "@/ui/Atom/Button/Button";

import Button from "@/ui/Atom/Button/Button";

// const Filter = ({ tag }) => {
//   console.log("Slug for project:", slug);
//   return (
//     <div className="flex gap-2 items-center">
//       {aktivitet.tag &&
//       Array.isArray(aktivitet.tag) &&
//       aktivitet.tag.length > 0 ? (
//         aktivitet.tag.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-amber-200 rounded-2xl px-3 py-1 text-sm"
//           >
//             {tag}
//           </span>
//         ))
//       ) : (
//         <span className="text-gray-400">Ingen tags</span> // Fallback hvis ingen tags findes
//       )}
//       <Button />
//     </div>
//   );
// };

// export default Filter;
// components/Filter.js
export default function Filter({ tags, onTagSelect, selectedTag }) {
  return (
    <div className="flex gap-2 flex-wrap mt-6 mb-6">
      <Button
        variant="secondary"
        size="md"
        onClick={() => onTagSelect(null)}
        // className={`px-4 py-2 rounded-full ${
        //   selectedTag === null ? "bg-blue-500 text-white" : "bg-gray-200"
        // }`}
        isSelected={selectedTag === null}
      >
        Alle
      </Button>
      {tags.map((tag, idx) => (
        <Button
          size="md"
          variant="secondary"
          key={idx}
          onClick={() => onTagSelect(tag)}
          isSelected={selectedTag === tag}
          //   className={`px-4 py-2 rounded-full ${
          //     selectedTag === tag ? " bg-beige-950 text-white" : "bg-gray-200"
          //   }`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
