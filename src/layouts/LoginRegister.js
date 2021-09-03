import React from "react";
import { Button, Icon} from "semantic-ui-react";

export default function LoginRegister() {
  return (
    <div>
      <Button.Group>
        <Button color="blue" animated>
          <Button.Content visible> Kayıt Ol</Button.Content>
          <Button.Content hidden>
            <Icon name="signup" />
          </Button.Content>
        </Button>
        <Button.Or />
        <Button positive animated>
          <Button.Content visible>Giriş Yap</Button.Content>
          <Button.Content hidden>
            <Icon name="sign in" />
          </Button.Content>
        </Button>
      </Button.Group>
    </div>
  );
}
