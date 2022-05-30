import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { Kagi } from 'lib/charts/Kagi';

class KagiPage extends React.Component {
  render() {
    return (
      <ContentSection title={KagiPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{ __html: require('md/KAGI') }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => <Kagi data={this.props.lotsOfData} type={type} />}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

KagiPage.title = 'Kagi';

export { KagiPage };
