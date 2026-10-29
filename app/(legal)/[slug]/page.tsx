import { CalculatorLayout } from "@/components/layout/calculator-layout";
import { notFound } from "next/navigation";
import Link from "next/link";

// Define the comprehensive, AdSense-compliant content for each legal page
const legalPages: Record<string, { title: string; lastUpdated: string; content: React.ReactNode }> = {
    "about": {
        title: "About FinancersLot",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
                        E-E-A-T Verified • Privacy by Design
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        Democratizing Financial Calculations with 100% In-Browser Privacy
                    </h2>
                    <p className="text-lg text-slate-600">
                        FinancersLot is an independent financial engineering and educational technology platform built to provide instant, mathematically audited calculators and printable document generators — completely free, transparent, and private.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                        <div className="text-3xl font-extrabold text-blue-600">116+</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">Financial Tools</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                        <div className="text-3xl font-extrabold text-emerald-600">100%</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">Client-Side Private</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                        <div className="text-3xl font-extrabold text-amber-500">8+</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">PDF Generators</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                        <div className="text-3xl font-extrabold text-blue-600">$0</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">Free Forever</div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">1. Our Founding Mission & Philosophy</h3>
                    <p>
                        Evaluating auto financing, mortgages, retirement projections, and taxes has become unnecessarily invasive. Most financial websites require users to enter private financial details — monthly salary, existing debts, credit scores, and property values — purely to capture leads and sell user profiles to aggressive lending brokers.
                    </p>
                    <p>
                        <strong>FinancersLot was established to provide an ethical alternative.</strong> We believe that financial mathematics belongs in the hands of the individual. You should be able to simulate vehicle payments, project retirement nest eggs, or generate a professional rent receipt without surrendering your private financial life to a remote server.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">2. Our Four Core Technological Pillars</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-emerald-500">
                            <h4 className="font-bold text-slate-900 mb-1">🔒 In-Browser Client-Side Privacy</h4>
                            <p className="text-sm text-slate-600">
                                Every arithmetic algorithm, amortization schedule, and PDF document runs locally inside your device&apos;s JavaScript engine. Your loan amounts, salaries, and invoice data are never uploaded or stored.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-blue-500">
                            <h4 className="font-bold text-slate-900 mb-1">📐 Mathematical Rigor & Auditing</h4>
                            <p className="text-sm text-slate-600">
                                Our formulas implement standard actuarial equations, Federal Reserve amortization schedules, continuous compounding models, and Islamic Nisab thresholds.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-amber-500">
                            <h4 className="font-bold text-slate-900 mb-1">⚡ Complete 116+ Calculator Suite</h4>
                            <p className="text-sm text-slate-600">
                                From niche automotive loans (Toyota, Audi, BMW) and heavy equipment (John Deere, Bobcat) to wealth builders (FIRE, Dividend DRIP, SIP, 401k), we cover every financial domain.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-purple-500">
                            <h4 className="font-bold text-slate-900 mb-1">🌐 100% Free & Open Access</h4>
                            <p className="text-sm text-slate-600">
                                No paywalls, no forced account sign-ups, and no restricted features. We believe financial literacy should be universally accessible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">3. Editorial & Mathematical Verification Standards</h3>
                    <p>
                        To ensure total accuracy across our tools:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                        <li><strong>Amortization Standards:</strong> Loan and mortgage payment equations are modeled on the institutional Annuity Formula: <code>PMT = P * [r(1+r)^n] / [(1+r)^n - 1]</code>.</li>
                        <li><strong>Compounding Algorithms:</strong> Investment tools model continuous and discrete compounding frequencies (daily, monthly, quarterly, annual).</li>
                        <li><strong>Retirement Solvers:</strong> The FIRE and 401(k) calculators use empirical Safe Withdrawal Rate (SWR) methodology rooted in the Trinity Study guidelines.</li>
                        <li><strong>Document Generators:</strong> Invoices, salary slips, and rent receipts format into clean, standard A4 PDFs ready for accounting records.</li>
                    </ul>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">4. How We Fund FinancersLot</h3>
                    <p>
                        FinancersLot is supported through privacy-compliant digital advertising (including Google AdSense). This monetization strategy enables us to maintain fast servers, audit calculation engines, and create new tools without charging users or selling financial data. We never accept sponsored bias in our mathematical formulas.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="/calculators" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors">
                            Explore All Calculators &rarr;
                        </Link>
                        <Link href="/contact" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-sm transition-colors">
                            Contact Our Team &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    "about-us": {
        title: "About FinancersLot",
        lastUpdated: "October 2026",
        content: null as any, // mirrored below
    },
    "privacy-policy": {
        title: "Privacy Policy",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
                        Transparency & Compliance • GDPR & CCPA Ready
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        FinancersLot Privacy Policy & Data Protection
                    </h2>
                    <p className="text-slate-600">
                        At FinancersLot (accessible from <a href="https://financerslot.com" className="text-blue-600 hover:underline">https://financerslot.com</a>), your privacy is our highest priority. This Privacy Policy documents our zero-storage client-side architecture, cookie usage, third-party advertising disclosures, and your statutory data rights under GDPR and CCPA.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">1. Our Zero Financial Tracking Guarantee</h3>
                    <p>
                        FinancersLot operates on an uncompromising <strong>Client-Side Privacy Architecture</strong>. When you input sensitive data — including vehicle prices, loan balances, interest rates, salary figures, investment amounts, or invoice recipient details — that information is processed <strong>strictly within your local browser&apos;s JavaScript runtime</strong>.
                    </p>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg text-emerald-900 text-sm font-medium">
                        🔒 Guaranteed: We do not transmit, log, store, sell, or analyze your financial numbers on external web servers. Closing your tab immediately clears session calculations from local memory.
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">2. Google AdSense & Third-Party Advertising Disclosures</h3>
                    <p>
                        FinancersLot displays advertisements served by third-party advertising partners, principally <strong>Google AdSense</strong>. Because we use Google advertising services, we provide the following mandatory disclosures:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                        <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.</li>
                        <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to FinancersLot and/or other sites across the internet.</li>
                        <li>Users may opt out of personalized advertising by visiting Google&apos;s official <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Google Ads Settings</a>.</li>
                        <li>Alternatively, users can opt out of third-party vendor use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">www.aboutads.info</a> or <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Your Online Choices</a>.</li>
                    </ul>
                    <p className="text-sm text-slate-600">
                        Third-party ad networks or ad servers use technologies like cookies, JavaScript, or Web Beacons that are sent directly to users&apos; browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of advertising campaigns and/or personalize advertising content. FinancersLot has no access to or control over cookies that are used by third-party advertisers.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">3. Log Files & Server Analytics</h3>
                    <p className="text-sm text-slate-600">
                        FinancersLot follows standard internet protocol procedures for using server log files. The information collected includes IP addresses, browser types, Internet Service Providers (ISP), date/time stamps, referring/exit pages, and number of clicks. These records are not linked to any personally identifiable information and are used solely for infrastructure diagnostics, security analysis, and site reliability.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">4. Local Storage & Interface Preferences</h3>
                    <p className="text-sm text-slate-600">
                        Our website utilizes browser <code>localStorage</code> exclusively to preserve non-identifying UI preferences:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                        <li><strong>Theme Selection:</strong> Preserving your Dark Mode or Light Mode toggle.</li>
                        <li><strong>Display Currency:</strong> Saving your selected currency symbol (e.g., USD, EUR, GBP, CAD, AUD, INR).</li>
                    </ul>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">5. GDPR Privacy Rights (EEA & UK Residents)</h3>
                    <p className="text-sm text-slate-600">
                        Under the European General Data Protection Regulation (GDPR), visitors located in the European Economic Area possess statutory rights including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                        <li>The right to access personal data</li>
                        <li>The right to rectification of inaccurate data</li>
                        <li>The right to erasure of personal data</li>
                        <li>The right to restrict or object to data processing</li>
                    </ul>
                    <p className="text-sm text-slate-600">
                        Because FinancersLot does not require accounts or store calculation figures, we hold zero user financial records. For privacy inquiries, email us at <a href="mailto:privacy@financerslot.com" className="text-blue-600 font-semibold">privacy@financerslot.com</a>.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">6. CCPA / CPRA Privacy Rights (California Residents)</h3>
                    <p className="text-sm text-slate-600">
                        Under the California Consumer Privacy Act (CCPA), California consumers have the right to request disclosure of categories of personal data collected, request deletion, and opt-out of the sale of personal data.
                    </p>
                    <p className="text-sm text-slate-600 font-semibold text-slate-900">
                        We Do Not Sell Personal Information: FinancersLot does not sell, rent, or trade user identities, financial numbers, or calculation records to data brokers or third parties.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">7. Children&apos;s Online Privacy Protection Act (COPPA)</h3>
                    <p className="text-sm text-slate-600">
                        FinancersLot is designed for adults and general audiences. We do not knowingly collect personal identifiable information from children under the age of 13. If you believe that your child provided personal information on our website, please contact us immediately and we will promptly remove such records.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">8. Contacting Our Data Privacy Team</h3>
                    <p className="text-sm text-slate-600">
                        If you have questions, inquiries, or feedback regarding this Privacy Policy, please reach out to our compliance desk:
                    </p>
                    <p className="font-bold text-blue-600">
                        Email: <a href="mailto:privacy@financerslot.com">privacy@financerslot.com</a>
                    </p>
                </div>
            </div>
        ),
    },
    "privacy": {
        title: "Privacy Policy",
        lastUpdated: "October 2026",
        content: null as any, // mirrored below
    },
    "disclaimer": {
        title: "Financial & Legal Disclaimer",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
                        Legal Notice • Important Disclosure
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        Financial & Legal Disclaimer
                    </h2>
                    <p className="text-slate-600">
                        Please review this legal disclosure carefully before relying upon any calculation, amortization schedule, formula, or document generated by FinancersLot.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">1. Not Financial, Legal, Tax, or Investment Advice</h3>
                    <p>
                        FinancersLot is an independent educational technology and mathematical software provider. <strong>FinancersLot is not a bank, certified financial planner (CFP), registered investment advisor (RIA), mortgage broker, lender, certified public accountant (CPA), or licensed attorney.</strong>
                    </p>
                    <p className="text-sm text-slate-600">
                        All calculators, guides, articles, formulas, and estimates presented on this website are provided strictly for <strong>educational, illustrative, and informational purposes</strong>. None of the figures or information provided constitutes a financial recommendation, endorsement of a credit product, tax advice, or loan offer.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">2. Mathematical Estimations & Variable Discrepancies</h3>
                    <p className="text-sm text-slate-600">
                        While our financial engines utilize industry-standard formulas, actual loan underwriting, mortgage amortization, and tax assessments depend on numerous variables unique to each lending institution and government jurisdiction, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                        <li>Individual credit scores (FICO/VantageScore) and risk tier adjustments.</li>
                        <li>Lender-specific origination fees, dealer acquisition fees, documentation fees, and pre-payment penalties.</li>
                        <li>State and municipal sales taxes, titling fees, and registration costs.</li>
                        <li>Property tax escrow, homeowner&apos;s insurance premiums, and private mortgage insurance (PMI).</li>
                    </ul>
                    <p className="text-sm text-slate-600">
                        Consequently, actual monthly repayment obligations, APR calculations, and tax liabilities may vary from figures displayed by our tools. You should always consult with a certified financial advisor or licensed lending officer prior to executing binding financial commitments.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">3. OEM Trademark & Brand Nominative Fair Use Notice</h3>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 text-sm">
                        <strong>Trademark Disclosure:</strong> All vehicle manufacturer brand names, logos, and model names — including but not limited to Toyota®, Audi®, BMW®, Ford®, Hyundai®, Kia®, Lexus®, Mercedes-Benz®, Nissan®, Porsche®, Subaru®, Mazda®, Volkswagen®, Volvo®, Land Rover®, John Deere®, Kubota®, Bobcat®, Harley-Davidson®, and Yamaha® — are registered trademarks of their respective corporate owners.
                    </div>
                    <p className="text-sm text-slate-600">
                        The use of manufacturer names on FinancersLot is strictly for <strong>nominative identification and descriptive comparison purposes</strong> to help consumers model loan terms. FinancersLot is an independent calculation resource and is <strong>not affiliated with, authorized by, sponsored by, or endorsed by</strong> any vehicle manufacturer, captive finance institution, or equipment company.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">4. Investment Risk & Market Volatility</h3>
                    <p className="text-sm text-slate-600">
                        Calculators modeling investment returns (e.g., SIP, Compound Interest, Dividend Growth, FIRE, 401(k), EPF, NPS, Crypto, Stocks) utilize user-selected static growth rates for mathematical modeling. Real financial markets fluctuate significantly. Past performance is no guarantee of future returns, and capital invested in equities, bonds, mutual funds, or digital assets is subject to market loss.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">5. Document Generator & PDF Export Disclaimer</h3>
                    <p className="text-sm text-slate-600">
                        Documents produced by our PDF tools (including Invoices, Rent Receipts, Salary Slips, Quotations, and Purchase Orders) are generated directly from data entered by the user. Users are solely responsible for ensuring that all exported invoices, tax receipts, and declarations comply with statutory accounting requirements and regional tax authority guidelines (e.g., IRS, HMRC, CRA, GST authorities).
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">6. Limitation of Liability</h3>
                    <p className="text-sm text-slate-600">
                        To the fullest extent permitted by applicable law, FinancersLot and its developers, affiliates, and partners disclaim all warranties, express or implied, including fitness for a particular purpose. FinancersLot shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, this website and its calculations.
                    </p>
                </div>
            </div>
        ),
    },
    "contact": {
        title: "Contact FinancersLot",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
                        Fast Response • 24–48h SLA
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        Get in Touch with Our Team
                    </h2>
                    <p className="text-slate-600">
                        Have questions about our calculation formulas, suggestions for a new tool, bug reports, or partnership opportunities? We are here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">General Support</div>
                        <div className="text-lg font-bold text-blue-600">
                            <a href="mailto:support@financerslot.com">support@financerslot.com</a>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Questions regarding website features, bug reports, and general help.</p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Editorial & Math Audit</div>
                        <div className="text-lg font-bold text-blue-600">
                            <a href="mailto:editorial@financerslot.com">editorial@financerslot.com</a>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Formula verification, actuarial feedback, and calculation methodology.</p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Privacy & Compliance</div>
                        <div className="text-lg font-bold text-blue-600">
                            <a href="mailto:privacy@financerslot.com">privacy@financerslot.com</a>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">GDPR, CCPA, cookie disclosures, and data rights inquiries.</p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Business & Partnerships</div>
                        <div className="text-lg font-bold text-blue-600">
                            <a href="mailto:partnerships@financerslot.com">partnerships@financerslot.com</a>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Advertising inquiries, API syndication, and media partnerships.</p>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Response Turnaround Guarantee</h3>
                    <p className="text-sm text-slate-600">
                        We respond to all verified technical, feedback, and formula inquiries within <strong>24 to 48 business hours</strong> (Monday through Friday, 9:00 AM – 6:00 PM EST).
                    </p>
                </div>
            </div>
        ),
    },
    "terms-of-service": {
        title: "Terms of Service",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>1. <strong>Acceptance of Terms:</strong> By accessing and using FinancersLot, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                <p>2. <strong>Lawful Permitted Use:</strong> You agree to use our calculators and tools solely for lawful personal and commercial estimation purposes. Automated scraping, scraping loops, or denial-of-service attempts against our infrastructure are strictly prohibited.</p>
                <p>3. <strong>Mathematical Accuracy Disclaimer:</strong> While calculations are built upon verified formulas, all numbers produced by FinancersLot are estimates and do not constitute certified professional financial or legal advice.</p>
                <p>4. <strong>Intellectual Property:</strong> The site layout, original code, UI components, and educational editorial content are the proprietary property of FinancersLot.</p>
                <p>5. <strong>Limitation of Liability:</strong> FinancersLot is not liable for financial loss, loan rejections, tax penalties, or contractual decisions made based on results generated by our tools.</p>
            </div>
        ),
    },
    "terms": {
        title: "Terms of Service",
        lastUpdated: "October 2026",
        content: null as any, // mirrored below
    },
    "cookie-policy": {
        title: "Cookie Policy",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>1. <strong>What Are Cookies?</strong> Cookies are small text files placed on your browser when visiting websites to retain user preferences and deliver functionality.</p>
                <p>2. <strong>Essential Local Storage:</strong> We do not use first-party tracking cookies. We utilize browser <code>localStorage</code> purely to remember your Dark/Light theme mode and display currency selection.</p>
                <p>3. <strong>Third-Party & Google AdSense Cookies:</strong> We partner with Google AdSense, which uses cookies (such as DoubleClick DART cookies) to serve relevant advertisements based on prior visits to our site and other internet destinations.</p>
                <p>4. <strong>How to Control & Opt Out:</strong> You can manage cookie permissions in your browser settings, or opt out of Google personalized ads at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Google Ads Settings</a> and <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">www.aboutads.info</a>.</p>
            </div>
        ),
    },
    "accessibility": {
        title: "Accessibility Statement",
        lastUpdated: "October 2026",
        content: (
            <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>1. <strong>Our Commitment:</strong> FinancersLot is committed to digital accessibility for individuals with disabilities. We continually review and optimize our platform to adhere to WCAG 2.1 Level AA accessibility standards.</p>
                <p>2. <strong>Features:</strong> Our platform includes high-contrast color schemes, full keyboard tab navigation, explicit form label associations, and responsive text scaling.</p>
                <p>3. <strong>Feedback:</strong> If you experience difficulty accessing any calculator or feature, please contact our team at <a href="mailto:support@financerslot.com" className="text-blue-600 font-semibold">support@financerslot.com</a> and we will assist promptly.</p>
            </div>
        ),
    },
};

// Mirror aliased content
legalPages["about-us"].content = legalPages["about"].content;
legalPages["privacy"].content = legalPages["privacy-policy"].content;
legalPages["terms"].content = legalPages["terms-of-service"].content;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.keys(legalPages).map((slug) => ({
        slug,
    }));
}

export default async function LegalPage({ params }: Props) {
    const { slug } = await params;
    const pageData = legalPages[slug as keyof typeof legalPages];

    if (!pageData) {
        notFound();
    }

    return (
        <CalculatorLayout
            title={pageData.title}
            description={`Read our ${pageData.title}. Last updated: ${pageData.lastUpdated}`}
            category="Legal"
            categorySlug="legal"
            themeColor="bg-slate-900"
        >
            <div className="max-w-4xl mx-auto py-12">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{pageData.title}</h1>
                    <p className="text-slate-500 mb-8 text-sm">Last Updated: {pageData.lastUpdated}</p>

                    <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                        {pageData.content}
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
}
