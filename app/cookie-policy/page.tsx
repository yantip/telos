import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Telos - how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-100 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl prose prose-lg prose-slate">
            <h2 className="text-slate-900">1. What Are Cookies?</h2>
            <p className="text-slate-700">
              Cookies are small text files that are stored on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information 
              to website owners.
            </p>

            <h2 className="text-slate-900">2. How We Use Cookies</h2>
            <p className="text-slate-700">
              Telos uses cookies and similar technologies to enhance your browsing experience, 
              analyze website traffic, and understand where our visitors come from.
            </p>

            <h2 className="text-slate-900">3. Types of Cookies We Use</h2>
            
            <h3 className="text-slate-900">Essential Cookies</h3>
            <p className="text-slate-700">
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation and access to secure areas of the website. The website 
              cannot function properly without these cookies.
            </p>
            <div className="overflow-x-auto">
              <table className="text-slate-700">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-slate-900">Cookie Name</th>
                    <th className="text-slate-900">Purpose</th>
                    <th className="text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie-consent</td>
                    <td>Stores your cookie consent preferences</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>accessibility-settings</td>
                    <td>Stores your accessibility preferences</td>
                    <td>1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-slate-900">Analytics Cookies</h3>
            <p className="text-slate-700">
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously.
            </p>
            <div className="overflow-x-auto">
              <table className="text-slate-700">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-slate-900">Cookie Name</th>
                    <th className="text-slate-900">Purpose</th>
                    <th className="text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics - distinguishes unique users</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google Analytics - distinguishes unique users</td>
                    <td>24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-slate-900">Marketing Cookies</h3>
            <p className="text-slate-700">
              These cookies are used to track visitors across websites. The intention is to display 
              ads that are relevant and engaging for the individual user.
            </p>
            <p className="text-slate-700">
              We currently do not use marketing cookies, but may implement them in the future with 
              your consent.
            </p>

            <h2 className="text-slate-900">4. Managing Your Cookie Preferences</h2>
            <p className="text-slate-700">
              When you first visit our website, you will see a cookie consent banner that allows you 
              to accept or customize your cookie preferences.
            </p>
            <p className="text-slate-700">You can also manage cookies through your browser settings:</p>
            <ul className="text-slate-700">
              <li><strong className="text-slate-900">Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong className="text-slate-900">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong className="text-slate-900">Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong className="text-slate-900">Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p className="text-slate-700">
              Please note that blocking some types of cookies may impact your experience on our 
              website and the services we are able to offer.
            </p>

            <h2 className="text-slate-900">5. Third-Party Cookies</h2>
            <p className="text-slate-700">
              Some cookies are placed by third-party services that appear on our pages. We do not 
              control these cookies. Third parties may include:
            </p>
            <ul className="text-slate-700">
              <li>Google Analytics (website analytics)</li>
              <li>LinkedIn (social sharing)</li>
            </ul>

            <h2 className="text-slate-900">6. Do Not Track</h2>
            <p className="text-slate-700">
              Some browsers have a &quot;Do Not Track&quot; feature that signals to websites that you do not 
              want to have your online activity tracked. We currently do not respond to DNT signals.
            </p>

            <h2 className="text-slate-900">7. Updates to This Policy</h2>
            <p className="text-slate-700">
              We may update this Cookie Policy from time to time. Any changes will be posted on 
              this page with an updated revision date.
            </p>

            <h2 className="text-slate-900">8. Contact Us</h2>
            <p className="text-slate-700">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <ul className="text-slate-700">
              <li>Email: <a href="mailto:contact@telosfn.com" className="text-blue-700 hover:text-blue-900">contact@telosfn.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
