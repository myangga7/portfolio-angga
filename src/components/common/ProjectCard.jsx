// ProjectCard.jsx - Card untuk menampilkan project
import Button from "./Button";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Image Container dengan efek hover */}
      <div className="relative overflow-hidden h-48">
        <img
          src={
            image || "https://placehold.co/600x400/3b82f6/white?text=Project"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button size="sm" onClick={() => window.open(liveUrl, "_blank")}>
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
