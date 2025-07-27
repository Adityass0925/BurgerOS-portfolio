import Image from 'next/image';

const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="z-10 w-[360px] h-[240px] overflow-hidden rounded-xl shadow-2xl md:mt-32">
      <Image
        src={src}
        alt={title}
        width={360}
        height={240}
        className="h-full w-full object-cover"
        quality={90}
        priority
      />
    </div>
  );
};

export default ProjectCard;
