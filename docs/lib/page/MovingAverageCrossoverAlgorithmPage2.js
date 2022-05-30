import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { MovingAverageCrossOverAlgorithmV2 } from 'lib/charts/MovingAverageCrossOverAlgorithmV2';

class MovingAverageCrossoverAlgorithmPage2 extends React.Component {
  render() {
    return (
      <ContentSection title={MovingAverageCrossoverAlgorithmPage2.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <MovingAverageCrossOverAlgorithmV2
                  data={this.props.someData}
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
                __html: require('md/MA-CROSSOVER-ALGORITHMV2'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

MovingAverageCrossoverAlgorithmPage2.title = 'MA Crossover - Using svg shape';

export { MovingAverageCrossoverAlgorithmPage2 };
