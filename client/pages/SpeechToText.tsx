import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

export default function SpeechToText() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="py-20 md:py-32 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-secondary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Speech-to-Text
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Convert lectures, classroom discussions, and audio files into
                accurate, searchable text. Never miss important information
                during live sessions.
              </p>

              <div className="bg-card border border-border rounded-lg p-12 text-center max-w-2xl">
                <p className="text-muted-foreground mb-6">
                  This feature is currently in development. We're working hard
                  to bring you the best Speech-to-Text experience.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  In the meantime, explore more about our platform or check
                  back soon for updates.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-2"
                  >
                    <Link to="/">Back to Home</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Link to="/text-to-speech">Try Text-to-Speech</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8 w-full">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    High Accuracy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced AI delivers accurate transcriptions you can trust.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Real-Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get live transcripts during lectures and meetings.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Easy Export
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Download transcripts in multiple formats for easy sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
