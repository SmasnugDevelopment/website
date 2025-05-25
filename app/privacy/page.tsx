"use client";

import { Heading2, Section } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function PrivacyPage() {
  let [legalMode, setLegalMode] = useState(false);
  let [legalModeWarningOpen, setLegalModeWarningOpen] = useState(false);

  return (
    <>
      <AlertDialog
        open={legalModeWarningOpen}
        onOpenChange={setLegalModeWarningOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader className="p-3 bg-white rounded text-black font-[family-name:var(--font-boring-legal)] ">
            <AlertDialogTitle>Flashbang warning</AlertDialogTitle>
            <AlertDialogDescription className="text-black">
              You have requested to enable legal mode, which will change the
              application interface to light theme. This mode is specifically
              designed for optimal visibility in professional environments such
              as courtrooms, legal departments, and corporate meetings. By
              proceeding with this change, you hereby acknowledge and expressly
              assume full responsibility for all associated risks and
              consequences. These may include, but are not limited to: increased
              eye strain during extended use, reduced visibility in certain
              lighting conditions, potential disruption to established workflow
              patterns, and any impact on productivity that may result from
              adjusting to the light interface. Do you confirm that you wish to
              proceed with enabling legal mode?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, go back</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setLegalMode(true)}
              className="font-[family-name:var(--font-boring-legal)]"
            >
              Yes, I understand the risks
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <section
        className={clsx(
          "p-4 flex justify-center",
          legalMode && "bg-white rounded-2xl",
        )}
      >
        <div
          className={clsx(
            "prose-lg container",
            legalMode &&
              "font-[family-name:var(--font-boring-legal)] text-black",
          )}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Switch
              id="legal-mode"
              checked={legalMode}
              onCheckedChange={(state) => {
                if (state) {
                  setLegalModeWarningOpen(true);
                } else {
                  setLegalMode(state);
                }
              }}
            />
            <Label htmlFor="legal-mode">Legal Mode</Label>
          </div>
          <h1>Privacy Policy</h1>
          {(legalMode && (
            <>
              <p>
                At Smasnug Development, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This Privacy Policy outlines how we collect, use, and disclose
                your information.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information about your usage of our website through
                analytics services:
              </p>
              <ul>
                <li>
                  <strong>Analytics Data:</strong> We use Posthog to collect
                  anonymous usage data such as page visits, interactions, and
                  user behavior to improve our services.
                </li>
                <li>
                  <strong>Hosting Data:</strong> Our website is hosted on
                  Cloudflare, which collects technical information such as IP
                  addresses, browser type, and device information as part of
                  their service delivery.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                The information we collect is used for the following purposes:
              </p>
              <ul>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve user experience and website performance</li>
                <li>
                  To maintain the security and functionality of our services
                </li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information to third parties. Your
                information may be shared in the following limited
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Information is shared with
                  third-party service providers (Posthog and Cloudflare) who
                  help us operate our website. These providers may collect and
                  process data according to their respective privacy policies.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required to do so by law or in response to
                  valid requests by public authorities.
                </li>
              </ul>

              <h2>4. Third-Party Links</h2>
              <p>
                Our website contains links to other sites (such as GitHub) that
                are not operated by us. We strongly advise you to review the
                privacy policies of these third-party websites as we have no
                control over and assume no responsibility for their content,
                privacy policies, or practices.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                Internet or electronic storage is 100% secure.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, including the right to
                access, correct, or delete your data. To exercise these rights,
                please contact us using the information provided below.
              </p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and notifying you if we have the necessary information
                (e.g., email). You are advised to review this Privacy Policy
                periodically for any changes.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us through our website's contact page.
              </p>
            </>
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
                  We don't directly share your data (ie. Cloudflare may, refer
                  to their privacy policy)
                </li>
              </ul>
              <h2>Other stuff</h2>
              <ul>
                <li>
                  If you click any links on this website (eg. Github), you
                  should check their privacy policies
                </li>
              </ul>
              <h2>Updates to this policy</h2>
              <ul>
                <li>We may update this policy from time to time</li>
                <li>
                  We will notify you if we have the necessary information (ie.
                  email)
                </li>
                <li>This page will be updated to reflect changes.</li>
              </ul>
              <h2>Your rights</h2>
              <ul>
                <li>
                  You have the right to access, correct, and delete your
                  personal data
                </li>
                <li>Just contact us</li>
              </ul>
              <h2>Contacting us</h2>
              <ul>
                <li>
                  <Link href="/contact">Here</Link> you go
                </li>
              </ul>
            </>
          )}
          <small>Last updated: 25th of May, 2025</small>
        </div>
      </section>
    </>
  );
}
