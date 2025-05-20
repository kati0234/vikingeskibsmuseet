import Button from "@/ui/Atom/Button/Button";

export default function Filter({ tags, onTagSelect, selectedTag }) {
  return (
    <div className="flex gap-2 flex-wrap mt-6 mb-6">
      <Button
        variant="secondary"
        size="md"
        onClick={() => onTagSelect(null)}
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
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
