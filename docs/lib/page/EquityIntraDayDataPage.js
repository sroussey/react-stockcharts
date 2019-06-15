import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartForDiscontinuousIntraDay } from 'lib/charts/CandleStickChartForDiscontinuousIntraDay';

class IntraDayContinuousDataPage extends React.Component {
  render() {
    return (
      <ContentSection title={IntraDayContinuousDataPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser ref='container'>
              {(type) => (
                <CandleStickChartForDiscontinuousIntraDay
                  data={this.props.intraDayDiscontinuousData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/INTRA-DAY-DISCONTINUOUS'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

IntraDayContinuousDataPage.title = 'Intra day with discontinuous scale';

export { IntraDayContinuousDataPage };
