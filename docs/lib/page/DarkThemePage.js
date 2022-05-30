import React from 'react';
import ReactDOM from 'react-dom';

import { TypeChooser, SaveChartAsImage } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithDarkTheme } from 'lib/charts/CandleStickChartWithDarkTheme';

class DarkThemePage extends React.Component {
  constructor(props) {
    super(props);
    this.saveNode = this.saveNode.bind(this);
    this.saveChartAsImage = this.saveChartAsImage.bind(this);
  }
  saveNode(node) {
    this.chart = node;
  }
  saveChartAsImage() {
    const container = ReactDOM.findDOMNode(this.chart); // eslint-disable-line react/no-find-dom-node
    SaveChartAsImage.saveChartAsImage(container);
  }
  render() {
    return (
      <ContentSection title={DarkThemePage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/DARK-THEME'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2} className='dark'>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithDarkTheme
                  ref={this.saveNode}
                  data={this.props.someData}
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

DarkThemePage.title = 'Theme - Dark';

export { DarkThemePage };
