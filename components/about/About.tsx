import DotPattern from '../ui/dot-pattern';
import { skills } from '@/constants/skills';
import SkillCard from './SkillCard';

const About = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-24">
      <div className="z-10">
        <div className="space-y-8 md:text-center">
          <h2 className="h2-bold">About us</h2>
          <p className="regular-paragraph mx-auto max-w-[835px]">
            Hey 👋 we’re <span className="text-code text-yellow-600">Bugeros</span> — a team building startup-ready products with smart tech and clean design. 

            From bidding platforms like <strong>Bidzy</strong> to green tools like <strong>Bintract</strong>, and even hosting <strong>PortxFolio</strong> — we love solving real problems. We also run <strong>Scaleon</strong>, offering affordable websites for growing businesses.

            We build fast, we build smart, and we build together.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 md:mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;
            return (
              <SkillCard
                key={skill.id}
                gradientColor={skill.gradientColor}
                assetBackground={skill.asset.background}
                titleBackground={skill.title.background}
                titleLabel={skill.title.label}
                content={skill.content}
              >
                <Icon className="size-4" />
              </SkillCard>
            );
          })}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};

export default About;
