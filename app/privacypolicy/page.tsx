interface Section {
  title: string;
  content: string | JSX.Element;
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    {
      title: 'Privacy Policy',
      content: (
        <>
          <p className="mb-4">Effective Date: July 2024</p>
          <p className="mb-4">
            Introduction: New York Racing Club (&#8220;we&#8221;,
            &#8220;us&#8221;, &#8220;our&#8221;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website
            nyracing.org , participate in our races, or engage with us in other
            ways. Please read this policy carefully to understand our practices
            regarding your personal information and how we will treat it.
          </p>
        </>
      ),
    },
    {
      title: 'Information We Collect',
      content: (
        <div className="mb-4">
          <p className="mb-2">
            <strong>Personal Information:</strong> We may collect personal
            information that you provide directly to us, such as your name,
            contact information, date of birth, and payment information when you
            register for our races or communicate with us.
          </p>
          <p className="mb-2">
            <strong>Usage Data:</strong> We may automatically collect certain
            information about your device and how you interact with our website,
            such as your IP address, browser type, and pages visited.
          </p>
        </div>
      ),
    },
    {
      title: 'Use of Your Information',
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li>To provide, operate, and maintain our races and services.</li>
          <li>To improve, personalize, and expand our offerings.</li>
          <li>
            To communicate with you, either directly or through our partners,
            regarding your participation in our races, updates, and promotional
            materials.
          </li>
          <li>To process your payments and registrations.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      ),
    },
    {
      title: 'Sharing Your Information',
      content: (
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties without your consent, except as described in this
          Privacy Policy or as required by law.
        </p>
      ),
    },
    {
      title: 'Security of Your Information',
      content: (
        <p className="mb-4">
          We use reasonable measures to protect the confidentiality and security
          of your personal information. However, no method of transmission over
          the internet or electronic storage is completely secure.
        </p>
      ),
    },
    {
      title: 'Your Choices',
      content: (
        <p className="mb-4">
          You have the right to opt out of receiving promotional emails from us
          by following the unsubscribe instructions included in those emails.
          You can also contact us to update or correct your personal
          information.
        </p>
      ),
    },
    {
      title: 'Changes to This Privacy Policy',
      content: (
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements. We will notify you of any changes
          by posting the updated Privacy Policy on our website with the
          effective date.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <p>
          If you have any questions about this Privacy Policy or our practices,
          please contact us at{' '}
          <a
            href="mailto:contact@nyracing.org"
            className="text-blue-500 font-bold"
          >
            board@nyracing.org
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 pt-4 lgpt-8">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.content}
        </section>
      ))}
    </div>
  );
}
