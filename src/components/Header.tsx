import { Flex, Heading, Icon, IconButton } from "@chakra-ui/react"
import { Switch } from "./ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "./ui/menu"
import { GrLanguage } from "react-icons/gr";
import { useColorMode } from "./ui/color-mode";
import { useTranslation } from "react-i18next";

function Header() {
  const { toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();
  
  return (
    <Flex height={'60px'} alignItems={'center'} padding={'0 16px'} justifyContent={'space-between'}>
      <Heading>Frontend Developer</Heading>
      <Flex gap={'16px'}>
        <Switch
        colorPalette="blue"
        size="lg"
        onCheckedChange={toggleColorMode}
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
        />
        <MenuRoot>
          <MenuTrigger asChild>
            <IconButton size="sm" aria-label="Language" variant={'outline'}>
              <GrLanguage />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            <MenuRadioItemGroup
              value={i18n.language}
              onValueChange={(e) => i18n.changeLanguage(e.value)}
            >
              <MenuRadioItem value="eng">English</MenuRadioItem>
              <MenuRadioItem value="rus">Русский</MenuRadioItem>
            </MenuRadioItemGroup>
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Flex>
  )
}

export default Header;