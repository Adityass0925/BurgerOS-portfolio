import { slugs, techs } from '@/constants/skills';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import TechTag from './TechTag';

const Techs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-none ">
          <p className="regular-paragraph z-10 max-w-[850px] md:text-center">
            At Bugeros, we build fast and smart — powered by modern frameworks, battle-tested tools, and scalable architecture. Here are the technologies we trust:
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2 md:max-w-[600px] md:items-center md:justify-center ">
            {techs.map((tech) => (
              <TechTag
                key={tech.label}
                title={tech.label}
                gradientColor={tech.bgColor}
              />
            ))}
          </div>

          <div>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern bottom-0 border  opacity-50"
      />
    </section>
  );
};
export default Techs;
