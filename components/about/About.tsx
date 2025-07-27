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
           Hi 👋, we’re{' '}
<span className="text-code text-yellow-600">BurgerOS</span>, a creative team passionate about building{' '}
<span className="text-green-700">engaging</span> and{' '}
<span className="text-blue-600">impactful</span> digital experiences. We focus on designing and developing websites and platforms that are both{' '}
<span className="text-orange-500">delightful for users</span> and{' '}
<span className="text-purple-600">efficient for businesses.</span>

Whether it's transforming how logistics work through <strong>Bidzy</strong> or reimagining sustainability with <strong>BinTrack</strong>, we turn bold ideas into real, working products. At BurgerOS, we don’t just build websites — we craft meaningful experiences that drive growth, solve problems, and leave a lasting impression.
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
