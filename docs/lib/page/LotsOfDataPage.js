import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithEdge } from 'lib/charts/CandleStickChartWithEdge';

class LotsOfDataPage extends React.Component {
  render() {
    return (
      <ContentSection title={LotsOfDataPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/LOTS-OF-DATA'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithEdge
                  data={this.props.lotsOfData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

LotsOfDataPage.title = 'Lots of data';

export { LotsOfDataPage };
