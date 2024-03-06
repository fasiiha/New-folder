import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, SelectBox, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CreditCardsPage() {
  return (
    <>
      <Helmet>
        <title>Bank_App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full pb-[30px] bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[27px]">
          <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] gap-6">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Heading as="h1">My Cards</Heading>
              <div className="flex flex-row w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[32%] pt-6 gap-[33px] bg-indigo-600_01 rounded-[25px]">
                  <div className="flex flex-col items-start justify-start w-[87%] gap-[26px]">
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <Text size="xs" as="p" className="!text-white-A700">
                          Balance
                        </Text>
                        <Text size="3xl" as="p" className="!text-white-A700">
                          $5,756
                        </Text>
                      </div>
                      <Img src="images/img_chip_card.png" alt="balance_two" className="w-[34px] object-cover" />
                    </div>
                    <div className="flex flex-row justify-between w-[76%]">
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          CARD HOLDER
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          VALID THRU
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                      <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                        <Text size="4xl" as="p" className="!text-white-A700">
                          3778 **** **** 1234
                        </Text>
                        <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] pt-6 gap-[33px] bg-indigo-500 rounded-[25px]">
                  <div className="flex flex-col items-start justify-start w-[87%] gap-[26px]">
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <Text size="xs" as="p" className="!text-white-A700">
                          Balance
                        </Text>
                        <Text size="3xl" as="p" className="!text-white-A700">
                          $5,756
                        </Text>
                      </div>
                      <Img src="images/img_chip_card.png" alt="chipcard_one" className="w-[34px] object-cover" />
                    </div>
                    <div className="flex flex-row justify-between w-[76%]">
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          CARD HOLDER
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          VALID THRU
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                      <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                        <Text size="4xl" as="p" className="!text-white-A700">
                          3778 **** **** 1234
                        </Text>
                        <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] pt-[23px] gap-[33px] border-gray-100_02 border border-solid bg-indigo-300_02 rounded-[25px]">
                  <div className="flex flex-col items-start justify-start w-[87%] gap-[26px]">
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <Text size="xs" as="p" className="!text-white-A700">
                          Balance
                        </Text>
                        <Text size="3xl" as="p" className="!text-white-A700">
                          $5,756
                        </Text>
                      </div>
                      <Img src="images/img_chip_card.png" alt="chipcard_one" className="w-[34px] object-cover" />
                    </div>
                    <div className="flex flex-row justify-between w-[76%]">
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          CARD HOLDER
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          VALID THRU
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                      <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                        <Text size="4xl" as="p" className="!text-white-A700">
                          3778 **** **** 1234
                        </Text>
                        <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[32%] gap-[17px]">
                <Heading as="h2">Card Expense Statistics</Heading>
                <div className="flex flex-row justify-center w-full p-[27px] bg-white-A700 rounded-[25px]">
                  <div className="flex flex-col items-center justify-start w-[85%] mt-0.5 gap-3.5 mx-[22px]">
                    <Img src="images/img_group_346_chart.png" alt="image_one" className="w-[76%] object-cover" />
                    <div className="flex flex-col w-full gap-3">
                      <div className="flex flex-row justify-between w-[99%] mr-[3px]">
                        <div className="flex flex-row justify-start items-center w-[39%] gap-3">
                          <div className="h-[15px] w-[15px] bg-indigo-100 rounded-[7px]" />
                          <Text size="lg" as="p" className="!font-medium">
                            DBL Bank
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[40%] gap-3">
                          <div className="h-[15px] w-[15px] bg-indigo-500 rounded-[7px]" />
                          <Text size="lg" as="p" className="!font-medium">
                            BRC Bank
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-start items-center w-[41%] gap-3">
                          <div className="h-[15px] w-[15px] bg-indigo-600_01 rounded-[7px]" />
                          <Text size="lg" as="p" className="!font-medium">
                            ABM Bank
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[41%] gap-3">
                          <div className="h-[15px] w-[15px] bg-indigo-200 rounded-[7px]" />
                          <Text size="lg" as="p" className="!font-medium">
                            MCP Bank
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[66%] gap-[19px]">
                <Heading as="h3">Card List</Heading>
                <div className="flex flex-col w-full gap-5">
                  <div className="flex flex-row justify-start items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                    </Button>
                    <div className="flex flex-col items-center justify-start w-[12%] ml-[15px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Type
                      </Text>
                      <Text size="lg" as="p">
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[10%] ml-[43px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Bank
                      </Text>
                      <Text size="lg" as="p">
                        DBL Bank
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[16%] ml-11 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Number
                      </Text>
                      <Text size="lg" as="p">
                        **** **** 5600
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[15%] ml-[47px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Namain Card
                      </Text>
                      <Text size="lg" as="p">
                        William{" "}
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="ml-[34px] !text-indigo-500 !font-medium">
                      View Details
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                    </Button>
                    <div className="flex flex-col items-center justify-start w-[12%] ml-[15px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Type
                      </Text>
                      <Text size="lg" as="p">
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[10%] ml-[43px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Bank
                      </Text>
                      <Text size="lg" as="p">
                        BRC Bank
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[16%] ml-[43px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Number
                      </Text>
                      <Text size="lg" as="p">
                        **** **** 4300
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[15%] ml-[46px] gap-[5px]">
                      <Text as="p" className="!text-indigo-600_01 !font-medium">
                        Namain Card
                      </Text>
                      <Text size="lg" as="p">
                        Michel
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="ml-[34px] !text-indigo-500 !font-medium">
                      View Details
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                    </Button>
                    <div className="flex flex-col items-center justify-start w-[12%] ml-[15px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Type
                      </Text>
                      <Text size="lg" as="p">
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[11%] ml-[43px] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Bank
                      </Text>
                      <Text size="lg" as="p">
                        ABM Bank
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[15%] ml-10 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Card Number
                      </Text>
                      <Text size="lg" as="p">
                        **** **** 7560
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[15%] ml-12 gap-1.5">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Namain Card
                      </Text>
                      <Text size="lg" as="p">
                        Edward
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="ml-[34px] !text-indigo-500 !font-medium">
                      View Details
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[66%] gap-[19px]">
                <Heading as="h4" className="ml-px">
                  Add New Card
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[26px] p-[27px] bg-white-A700 rounded-[25px]">
                  <Text as="p" className="w-[94%] ml-[3px] leading-7">
                    Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a
                    Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain
                    cash advances.
                  </Text>
                  <div className="flex flex-row justify-start items-center w-full ml-[3px] gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-[48%] gap-[9px]">
                      <Text as="p">Card Type</Text>
                      <Input
                        name="classic"
                        placeholder="Classic"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] gap-2.5">
                      <Text as="p">Name On Card</Text>
                      <Input
                        name="name"
                        placeholder="My Cards"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full ml-[3px] gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-[48%] gap-2.5">
                      <Text as="p">Card Number</Text>
                      <Input
                        type="password"
                        name="cardNumber"
                        placeholder="**** **** **** ****"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] gap-[9px]">
                      <Text as="p">Expiration Date</Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                        name="expirationDate"
                        placeholder="25 January 2025"
                        options={dropDownOptions}
                        className="w-full gap-px border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <Button
                    color="indigo_600_01"
                    size="lg"
                    className="mb-[11px] ml-[3px] font-medium min-w-[160px] rounded-[9px]"
                  >
                    Add Card
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] gap-[17px]">
                <Heading as="h5">Card Setting</Heading>
                <div className="flex flex-col items-start justify-start w-full p-[30px] bg-white-A700 rounded-[25px]">
                  <div className="flex flex-col w-[94%] gap-5">
                    <div className="flex flex-row justify-start items-center w-[95%] mr-4 gap-5">
                      <Button size="3xl" shape="round" className="w-[60px]">
                        <Img src="images/img_001_block_credit_card.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[69%] gap-[7px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Block Card
                        </Text>
                        <Text size="lg" as="p">
                          Instantly block your card
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[96%] mr-3 gap-5">
                      <Button size="3xl" shape="round" className="w-[60px]">
                        <Img src="images/img_002_padlock.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[70%] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Change Pin Code
                        </Text>
                        <Text size="lg" as="p">
                          Choose another pin code
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-5">
                      <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_003_google_glass_logo.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Add to Google Pay
                        </Text>
                        <Text size="lg" as="p">
                          Withdraw without any card
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-5">
                      <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_apple_2_1_indigo_600_01.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Add to Apple Pay
                        </Text>
                        <Text size="lg" as="p">
                          Withdraw without any card
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-5">
                      <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_apple_2_1_indigo_600_01.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Add to Apple Store
                        </Text>
                        <Text size="lg" as="p">
                          Withdraw without any card
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
