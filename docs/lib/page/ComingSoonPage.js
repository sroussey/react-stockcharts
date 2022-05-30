import React from 'react';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

class ComingSoonPage extends React.Component {
  render() {
    return (
      <ContentSection title={ComingSoonPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/COMING-SOON'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

ComingSoonPage.title = 'Coming soon';

export { ComingSoonPage };
