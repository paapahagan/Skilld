import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/dummy-skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className=" text-gradient"> Agentic Intelligence</span>
					</h1>
					<p>
						A high-performance registry for procedural agent skills. Dişcover,
						publish, and operate reusable agent capabilities from a route-driven
						workspace.|
					</p>
				</div>
				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size="18" />
						<span>Browse Registry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className=" text-gradient">skills</span>
					</h2>
					<p>latest skills loaded from data in descending creation order</p>
				</div>

				<div>
					{/* skills */}
					{dummySkills.length > 0 && (
						<div className="lg:grid lg:grid-cols-3 gap-3">
							{dummySkills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
