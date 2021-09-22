import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button color="blue" animated>
            <Button.Content visible> Kayıt Ol</Button.Content>
            <Button.Content hidden>
              <Icon name="signup" />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button onClick={signIn} positive animated>
            <Button.Content visible>Giriş Yap</Button.Content>
            <Button.Content hidden>
              <Icon name="sign in" />
            </Button.Content>
          </Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
