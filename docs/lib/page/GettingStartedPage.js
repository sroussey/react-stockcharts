import React from 'react';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

class GettingStartedPage extends React.Component {
  render() {
    return (
      <ContentSection title={GettingStartedPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/GETTING-STARTED'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

GettingStartedPage.title = 'Getting Started';

export { GettingStartedPage };
