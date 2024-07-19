interface Section {
  title: string;
  content: string | JSX.Element;
}

export default function TermsAndConditions() {
  const sections: Section[] = [
    {
      title: 'Terms and Conditions',
      content: (
        <>
          <p className="mb-4">
            These terms and conditions govern your use of this website
            nyracing.org and any services provided by New York Racing Club
            (&#8220;we&#8221;, &#8220;us&#8221;, &#8220;our&#8221;). By
            accessing or using our website, you agree to comply with these terms
            and conditions in full. If you do not agree with any part of these
            terms and conditions, you must not use our website.
          </p>
        </>
      ),
    },
    {
      title: 'Intellectual Property Rights',
      content: (
        <p className="mb-4">
          Unless otherwise stated, we or our licensors own the intellectual
          property rights in the website and material on the website. Subject to
          the license below, all these intellectual property rights are
          reserved.
        </p>
      ),
    },
    {
      title: 'License to Use Website',
      content: (
        <p className="mb-4">
          You may view, download for caching purposes only, and print pages from
          the website for your own personal use, subject to the restrictions set
          out below and elsewhere in these terms and conditions.
        </p>
      ),
    },
    {
      title: 'Restrictions',
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li>
            Republish material from this website (including republication on
            another website);
          </li>
          <li>Sell, rent, or sub-license material from the website;</li>
          <li>Show any material from the website in public;</li>
          <li>
            Reproduce, duplicate, copy, or otherwise exploit material on our
            website for a commercial purpose;
          </li>
          <li>Edit or otherwise modify any material on the website; or</li>
          <li>
            Redistribute material from this website except for content
            specifically and expressly made available for redistribution.
          </li>
        </ul>
      ),
    },
    {
      title: 'Limitations of Liability',
      content: (
        <p className="mb-4">
          The limitations and exclusions of liability set out in this Section
          and elsewhere in these terms and conditions govern all liabilities
          arising under these terms and conditions or relating to the subject
          matter of these terms and conditions, including liabilities arising in
          contract, in tort (including negligence) and for breach of statutory
          duty.
        </p>
      ),
    },
    {
      title: 'Indemnity',
      content: (
        <p className="mb-4">
          You hereby indemnify us and undertake to keep us indemnified against
          any losses, damages, costs, liabilities, and expenses (including
          without limitation legal expenses and any amounts paid by us to a
          third party in settlement of a claim or dispute on the advice of our
          legal advisers) incurred or suffered by us arising out of any breach
          by you of any provision of these terms and conditions, or arising out
          of any claim that you have breached any provision of these terms and
          conditions.
        </p>
      ),
    },
    {
      title: 'Breaches of These Terms and Conditions',
      content: (
        <p className="mb-4">
          Without prejudice to our other rights under these terms and
          conditions, if you breach these terms and conditions in any way, we
          may take such action as we deem appropriate to deal with the breach,
          including suspending your access to the website, prohibiting you from
          accessing the website, blocking computers using your IP address from
          accessing the website, contacting your internet service provider to
          request that they block your access to the website, and/or bringing
          court proceedings against you.
        </p>
      ),
    },
    {
      title: 'Variation',
      content: (
        <p className="mb-4">
          We may revise these terms and conditions from time to time. Revised
          terms and conditions will apply to the use of our website from the
          date of the publication of the revised terms and conditions on our
          website. Please check this page regularly to ensure you are familiar
          with the current version.
        </p>
      ),
    },
    {
      title: 'Entire Agreement',
      content: (
        <p className="mb-4">
          These terms and conditions, together with our Privacy Policy,
          constitute the entire agreement between you and us in relation to your
          use of our website and supersede all previous agreements in respect of
          your use of our website.
        </p>
      ),
    },
    {
      title: 'Law and Jurisdiction',
      content: (
        <p className="mb-4">
          These terms and conditions will be governed by and construed in
          accordance with the laws of [your jurisdiction], and any disputes
          relating to these terms and conditions will be subject to the
          exclusive jurisdiction of the courts of [your jurisdiction].
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <p>
          If you have any questions about these terms and conditions, please
          contact us at{' '}
          <a
            href="mailto:contact@nyracing.org"
            className="text-blue-500 font-bold"
          >
            contact@nyracing.org
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.content}
        </section>
      ))}
    </div>
  );
}
