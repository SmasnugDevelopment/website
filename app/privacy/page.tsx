"use client";

import { Heading2, Section } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function PrivacyPage() {
  let [legalMode, setLegalMode] = useState(false);

  return (
    <section className="p-4 flex justify-center">
      <div
        className={clsx(
          "prose-invert prose-lg container",
          legalMode && "font-[family-name:var(--font-boring-legal)]",
        )}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Switch
            id="legal-mode"
            checked={legalMode}
            onCheckedChange={setLegalMode}
          />
          <Label htmlFor="legal-mode">Legal Mode</Label>
        </div>
        <h1>Privacy Policy</h1>
        {(legalMode && (
          <p>
            At our website, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and disclose your information.
          </p>
        )) || (
          <>
            <h2>What we do</h2>
            <ul>
              <li>
                We use{" "}
                <Link href="https://posthog.com/" target="_blank">
                  Posthog
                </Link>{" "}
                for analytics
              </li>
              <li>
                This website is hosted on{" "}
                <Link href="https://www.cloudflare.com/" target="_blank">
                  Cloudflare
                </Link>{" "}
                and they collect analytics data as well
              </li>
            </ul>
            <h2>What we don't do</h2>
            <ul>
              <li>We don't sell your data</li>
              <li>
                We don't directly share your data (ie. Cloudflare may, refer to
                their privacy policy)
              </li>
            </ul>
            <h2>Other stuff</h2>
            <ul>
              <li>
                If you click any links on this website (eg. Github), you should
                check their privacy policies
              </li>
            </ul>
            <h2>Contacting us</h2>
            <ul>
              <li>
                <Link href="/contact">Here</Link> you go
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
