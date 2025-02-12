import { Box, Flex, Heading, Image, Link, List, Separator, Text } from "@chakra-ui/react"
import profilePicture from '../images/profile-picture.jpg'
import { useTranslation } from "react-i18next";
import { HiPhone } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Profile(){
  const { t } = useTranslation();
  
  return (
    <Flex padding={'32px 16px'} margin={'0 auto'} gap={'32px'} maxWidth={'1280px'} flexDirection={'column'}>
      <Flex gap={'32px'} width={'100%'}>
        <Image src={profilePicture} className="profile-picture"/>
        <Box>
          <Heading paddingBottom={'10px'}>{t('name')}</Heading>
          <Text paddingBottom={'10px'} fontWeight={'bold'}>{t('qualification')}</Text>
          <List.Root>
            <List.Item>TypeScript, JavaScript</List.Item>
            <List.Item>React</List.Item>
            <List.Item>Git</List.Item>
          </List.Root>
          <Text width={'100%'} maxWidth={'500px'} paddingTop='16px'>{t('about')}</Text>
          <Flex paddingTop={'32px'} alignItems={'center'} gap={'8px'}>
            <HiPhone />
            <Link href="tel:+79034887258">+79034887258</Link>
          </Flex>
          <Flex paddingTop={'16px'} alignItems={'center'} gap={'8px'}>
            <FaTelegramPlane />
            <Link href="t.me/Skavr">Telegram</Link>
          </Flex>
          <Flex paddingTop={'16px'} alignItems={'center'} gap={'8px'}>
            <MdEmail />
            <Link href="mailto:ye.sidorenko@gmail.com">ye.sidorenko@gmail.com</Link>
          </Flex>
        </Box>
      </Flex>
      <Separator />
      <Flex gap={'10px'} flexDirection={'column'}>
        <Heading size='3xl' paddingBottom={'10px'}>{t("experience.title")}</Heading>
        <Heading>Chronicle Software Ltd.</Heading>
        <Text fontWeight='bold'>React Developer</Text>
        <Text>{t("experience.chronicleDescription1")}</Text>
        <Text>{t("experience.done")}</Text>
        <List.Root paddingBottom={'10px'}>
          <List.Item>{t("experience.chronicleItem1")}</List.Item>
          <List.Item>{t("experience.chronicleItem2")}</List.Item>
          <List.Item>{t("experience.chronicleItem3")}</List.Item>
          <List.Item>{t("experience.chronicleItem4")}</List.Item>
          <List.Item>{t("experience.chronicleItem5")}</List.Item>
          <List.Item>{t("experience.chronicleItem6")}</List.Item>
          <List.Item>{t("experience.chronicleItem7")}</List.Item>
          <List.Item>{t("experience.chronicleItem8")}</List.Item>
          <List.Item>{t("experience.chronicleItem9")}</List.Item>
          <List.Item>{t("experience.chronicleItem10")}</List.Item>
        </List.Root>
        <Text>{t("experience.chronicleDescription2")}</Text>
        <Text>{t("experience.done")}</Text>
        <List.Root>
          <List.Item>{t("experience.chronicleItem11")}</List.Item>
          <List.Item>{t("experience.chronicleItem12")}</List.Item>
          <List.Item>{t("experience.chronicleItem13")}</List.Item>
        </List.Root>
      </Flex>
      <Flex gap={'10px'} flexDirection={'column'}>
        <Heading size='3xl' paddingBottom={'10px'}>{t("education.title")}</Heading>
        <Heading>2017-2019</Heading>
        <Text fontWeight='bold'>{t("education.hse")}</Text>
        <Text>{t("education.qualification1")}</Text>
        <Text paddingBottom={'12px'}>{t("education.program1")}</Text>
        <Heading>2013-2017</Heading>
        <Text fontWeight='bold'>{t("education.sfedu")}</Text>
        <Text>{t("education.qualification2")}</Text>
        <Text>{t("education.program2")}</Text>
      </Flex>
      <Flex gap={'10px'} flexDirection={'column'}>
        <Heading size='3xl' paddingBottom={'10px'}>{t("courses.title")}</Heading>
        <Heading>2022-2023</Heading>
        <Text fontWeight='bold'>{t("courses.yandex")}</Text>
        <Text>{t("courses.program1")}</Text>
        <Heading>2014</Heading>
        <Text fontWeight='bold'>{t("courses.leeds")}</Text>
        <Text>{t("courses.program2")}</Text>
      </Flex>
    </Flex>
  )
}

export default Profile