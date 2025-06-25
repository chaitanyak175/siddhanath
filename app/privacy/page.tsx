"use client";

import React from "react";

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-10 sm:px-20 font-gilroy">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-6xl sm:text-8xl font-bebas text-white mb-4">
                    PRIVACY POLICY
                </h1>
                <div className="flex justify-center items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <p className="text-[#868282] text-xs uppercase tracking-wider">
                        YOUR DATA PROTECTION
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#111111] rounded-lg p-8 mb-8 border border-[#2C2C2C]">
                    <p className="text-[#f3ececd3] text-lg leading-relaxed mb-6">
                        <strong className="text-amber-400">
                            Siddhanath Trendz Pvt. Ltd.
                        </strong>{" "}
                        ("Company", "we", "our", "us") respects your privacy and
                        is committed to protecting it through this Privacy
                        Policy. This policy outlines how we collect, use,
                        disclose, and safeguard your information when you visit
                        our website{" "}
                        <a
                            href="https://www.sdtorg.com"
                            className="text-amber-400 hover:text-amber-300 underline transition-colors"
                        >
                            www.sdtorg.com
                        </a>{" "}
                        (the "Site").
                    </p>
                </div>

                {/* Section 1 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            1. Information We Collect
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <div className="space-y-4">
                            <div>
                                <strong className="text-amber-400">
                                    Personal Information:
                                </strong>
                                <span className="text-[#c8c8c8c5] ml-2">
                                    Name, email address, phone number, company
                                    name, billing/shipping addresses.
                                </span>
                            </div>
                            <div>
                                <strong className="text-amber-400">
                                    Business Information:
                                </strong>
                                <span className="text-[#c8c8c8c5] ml-2">
                                    Order requirements, product preferences, GST
                                    details, etc.
                                </span>
                            </div>
                            <div>
                                <strong className="text-amber-400">
                                    Technical Data:
                                </strong>
                                <span className="text-[#c8c8c8c5] ml-2">
                                    IP address, browser type, device
                                    information, cookies, location data.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            2. How We Use Your Information
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <div className="space-y-3 text-[#c8c8c8c5]">
                            <p>• Process inquiries and fulfill orders</p>
                            <p>
                                • Communicate with you regarding orders,
                                support, or product information
                            </p>
                            <p>
                                • Send marketing or promotional content (only
                                with consent)
                            </p>
                            <p>
                                • Improve website functionality and user
                                experience
                            </p>
                            <p>• Comply with legal or regulatory obligations</p>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            3. Data Sharing and Disclosure
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <p className="text-[#f3ececd3] mb-4">
                            We do not sell or rent your personal information.
                            However, we may share information with:
                        </p>
                        <div className="space-y-3 text-[#c8c8c8c5]">
                            <p>
                                • Service providers (e.g., logistics, payment
                                gateways, marketing agencies)
                            </p>
                            <p>
                                • Legal or regulatory authorities, if required
                            </p>
                            <p>
                                • Internal teams for analytics or customer
                                support purposes
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            4. Cookies and Tracking Technologies
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <p className="text-[#f3ececd3]">
                            Our site uses cookies and similar tools to enhance
                            user experience, understand usage patterns, and
                            deliver tailored content. You may disable cookies
                            through your browser settings.
                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            5. Data Security
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <p className="text-[#f3ececd3]">
                            We implement standard security protocols to
                            safeguard your information. While we strive for
                            complete security, no method of transmission over
                            the internet is 100% secure.
                        </p>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            6. Your Rights
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <div className="space-y-3 text-[#c8c8c8c5] mb-4">
                            <p>• Request access to your personal data</p>
                            <p>• Ask us to update or delete your information</p>
                            <p>
                                • Opt-out of promotional communication at any
                                time
                            </p>
                        </div>
                        <p className="text-[#f3ececd3]">
                            To exercise your rights, please contact us at:{" "}
                            <a
                                href="mailto:info@sdtorg.com"
                                className="text-amber-400 hover:text-amber-300 underline transition-colors"
                            >
                                info@sdtorg.com
                            </a>{" "}
                            or{" "}
                            <a
                                href="mailto:varadhpatil@sdtorg.com"
                                className="text-amber-400 hover:text-amber-300 underline transition-colors"
                            >
                                varadhpatil@sdtorg.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Section 7 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            7. External Links
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <p className="text-[#f3ececd3]">
                            Our website may contain links to third-party
                            websites. We are not responsible for the privacy
                            practices or content of those websites.
                        </p>
                    </div>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            8. Changes to This Policy
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <p className="text-[#f3ececd3]">
                            We may update this Privacy Policy from time to time.
                            The latest version will always be available on this
                            page with the updated date.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <h2 className="text-2xl font-semibold text-white">
                            9. Contact Us
                        </h2>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-6 border border-[#2C2C2C]">
                        <div className="text-[#f3ececd3] space-y-2">
                            <p className="text-amber-400 font-semibold text-lg">
                                Siddhanath Trendz Pvt. Ltd.
                            </p>
                            <p>
                                Office No. 411 & 412, Vision Flora Phase II,
                                Wing C-1
                            </p>
                            <p>
                                Survey Number: 85, Pimple Saudagar, Pune –
                                411027
                            </p>
                            <p>
                                📞{" "}
                                <a
                                    href="tel:+918886936914"
                                    className="text-amber-400 hover:text-amber-300 transition-colors"
                                >
                                    +91 88869 36914
                                </a>
                            </p>
                            <p>
                                📧{" "}
                                <a
                                    href="mailto:info@sdtorg.com"
                                    className="text-amber-400 hover:text-amber-300 underline transition-colors"
                                >
                                    info@sdtorg.com
                                </a>{" "}
                                |{" "}
                                <a
                                    href="mailto:varadhpatil@sdtorg.com"
                                    className="text-amber-400 hover:text-amber-300 underline transition-colors"
                                >
                                    varadhpatil@sdtorg.com
                                </a>
                            </p>
                            <p>
                                🌐{" "}
                                <a
                                    href="https://www.sdtorg.com"
                                    className="text-amber-400 hover:text-amber-300 underline transition-colors"
                                >
                                    www.sdtorg.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Brand */}
            <div className="flex justify-center items-center text-4xl sm:text-6xl text-center font-bebas text-[#2C2C2C] mt-16">
                SIDDHANATH TRENDZ
            </div>
        </div>
    );
};

export default PrivacyPage;
