import React from 'react';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

class ChangeLogPage extends React.Component {
  render() {
    return (
      <ContentSection title={ChangeLogPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/CHANGE-LOG'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

ChangeLogPage.title = 'Change log';

export { ChangeLogPage };
