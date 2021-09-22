import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          size="mini"
          avatar
          spaced="right"
          src="https://lh3.googleusercontent.com/xHOy2_W5CGKG4fvAOJco91VFyNkA_FV7PdjJEXn2x0A2qLXEKiUK7U6C9f4r6-pmyqSmV0I=s85"
        />
        <Dropdown pointing="top right" text="Halis">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />

            <Dropdown.Item text="Çıkış yap" onClick={signOut} icon="frown" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
