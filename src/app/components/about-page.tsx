"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto flex flex-col items-start md:flex-row my-4 md:my-8">
      <section id="about">
        <div className="justify-start">
          <p className="text-3xl text-center md:text-4xl leading-normal md:leading-relaxed mb-2 text-yellow-300">
            About $SAINT
          </p>
        </div>
        <div className="h-full w-full  p-4">
          <div className="grid gap-14 md:grid-cols-2 md:gap-5">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                Satoshi AI agent is an innovative shift in the world of
                blockchain intelligence, inspired by the ethos of Satoshi
                Nakamoto’s vision. By leveraging the power of AI and deep
                learning, $SAINT transforms the overwhelming complexity of
                blockchain data into streamlined, actionable insights. Designed
                with both novice and seasoned crypto users in mind, it provides
                real-time tracking, comprehensive analytics, and robust tools to
                facilitate informed decisions and seamless interactions within
                the blockchain ecosystem.
              </CardContent>
            </Card>
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                Our mission is to empower users by delivering a comprehensive,
                AI-driven platform that simplifies blockchain interactions.
                $SAINT seeks to provide actionable insights and support user
                autonomy, making complex data accessible, understandable, and
                valuable for everyone in the crypto space.
              </CardContent>
            </Card>
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Team Efforts</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                At the heart of $SAINT’s success is a dedicated team of
                blockchain experts, AI specialists, and tech innovators
                committed to creating a transformative user experience. The
                development team collaborates closely to integrate advanced
                machine learning algorithms, ensuring that the platform stays
                ahead in delivering reliable, up-to-date analytics.
              </CardContent>
            </Card>
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>The Future</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                As blockchain technology progresses, $SAINT stands as a beacon
                of innovation aligned with the principles set forth by Satoshi
                Nakamoto. The roadmap is ambitious yet focused, comprising four
                key phases: Data Collection and AI Model Development, Core
                Feature Launch, Expansion of Cross-Chain and Security
                Capabilities, and Full Decentralization
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
