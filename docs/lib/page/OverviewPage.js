import React from 'react';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

class OverviewPage extends React.Component {
  render() {
    return (
      <ContentSection title={OverviewPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/OVERVIEW'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

OverviewPage.title = 'Overview';

export { OverviewPage };
