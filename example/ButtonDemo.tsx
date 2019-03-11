import Button, { Design, Size, Shape } from '$component/Button';
import * as React from 'react';

export default function ButtonDemo() {
  return (
    <section>
      <section>
        <h4>Design</h4>
        <Button></Button>
        <Button design={Design.primary}></Button>
        <Button design={Design.danger}></Button>
      </section>
      <section>
        <h4>Size</h4>
        <Button></Button>
        <Button size={Size.large}></Button>
        <Button size={Size.medium}></Button>
        <Button size={Size.small}></Button>
      </section>

      <section>
        <h4>Shape</h4>
        <Button></Button>
        <Button shape={Shape.circle}></Button>
        <Button shape={Shape.rect}></Button>
      </section>

      <section>
        <h4>disabled, block, loading</h4>
        <Button disabled={true}></Button>
        <Button loading={true}></Button>
        <Button block={true}></Button>
      </section>

    </section>
  );
}
