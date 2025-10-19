import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function TextToSpeech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="py-20 md:py-32 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Text-to-Speech
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Transform documents, PDFs, and lecture notes into clear,
                natural-sounding audio. Listen at your own pace with full
                control over speed, voice, and more.
              </p>

              <div className="bg-card border border-border rounded-lg p-12 text-center max-w-2xl">
                <p className="text-muted-foreground mb-6">
                  This feature is currently in development. We're working hard
                  to bring you the best Text-to-Speech experience.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  In the meantime, explore more about our platform or check back
                  soon for updates.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline" className="border-2">
                    <Link to="/">Back to Home</Link>
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/speech-to-text">Try Speech-to-Text</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8 w-full">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Natural Voices
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from multiple high-quality voices and languages.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Full Control
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Adjust speed, pitch, and volume to your preference.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Easy Upload
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Upload documents or paste text with just a few clicks.
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
