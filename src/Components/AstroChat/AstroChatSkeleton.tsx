import React from 'react';
import {
  Button,
  InputGroup,
  InputGroupText,
  Skeleton,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Text,
  TextArea,
  TextAreaReadOnlyVariant,
  TextContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import ExpandAltIcon from '@patternfly/react-icons/dist/esm/icons/expand-alt-icon';
import PlaneIcon from '@patternfly/react-icons/dist/esm/icons/paper-plane-icon';

export const AstroChatSkeleton: React.FunctionComponent<unknown> = () => {
  return (
    <div>
      <Stack className="astro-l-stack">
        <StackItem className="astro-l-stack__header pf-v5-u-py-md">
          <Split hasGutter>
            <SplitItem isFilled>
              <TextContent className="pf-v5-u-pl-lg pf-u-color-light-100 pf-v5-u-font-size-xl">
                <Text>Virtual Assistant</Text>
              </TextContent>
            </SplitItem>
            <SplitItem>
              <ToolbarGroup variant="icon-button-group">
                <ToolbarItem>
                  <Button variant="plain" aria-label="Full screen" className="pf-v5-u-color-light-100">
                    <ExpandAltIcon />
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button variant="plain" aria-label="Close virtual assistant" className="pf-v5-u-color-light-100">
                    <AngleDownIcon />
                  </Button>
                </ToolbarItem>
              </ToolbarGroup>
            </SplitItem>
          </Split>
        </StackItem>
        <StackItem className="astro-l-stack__body pf-v5-u-px-md pf-v5-u-pt-xl pf-v5-m-scrollable pf-v5-u-background-color-100" isFilled>
          <Skeleton width="80%" />
        </StackItem>
        <StackItem className="astro-l-stack__footer">
          <InputGroup>
            <TextArea
              placeholder="Type a message..."
              name="user-query"
              type="text"
              aria-label="User question"
              className="pf-v5-u-pt-md pf-v5-u-pl-md"
              readOnlyVariant={TextAreaReadOnlyVariant.plain}
            />
            <InputGroupText id="username">
              <Button isDisabled variant="plain" className="pf-v5-u-px-sm">
                <PlaneIcon />
              </Button>
            </InputGroupText>
          </InputGroup>
        </StackItem>
      </Stack>
    </div>
  );
};
