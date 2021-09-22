import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function FrequentlyAskedQuestions() {
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Image
            size="large"
            src="data:image/jpeg;base64,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"
          />
          <Card.Header>Sıkça Sorulan sorular</Card.Header>
          <Card.Description > Biz kimiz ?</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
