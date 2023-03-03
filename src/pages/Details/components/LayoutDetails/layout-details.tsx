import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Col,
  ConfigProvider,
  List as AntDList,
  Row,
  Tag,
  Tooltip,
  Tree,
  Typography,
} from "antd";
import { AssetCard, Breadcrumb, List, ListHeader } from "../";
import { Timeline } from "../../../../components/Timeline";
import { currentState } from "../../../../provider";
import { containerStyle, deleteIconStyle, timelineStyle } from "./styles";
import { LayoutDetailsProps } from "./types";

const { Title, Text } = Typography;

export function LayoutDetails({
  type,
  name,
  breadcrumb,
  lists,
  assetsList,
  asset,
  workorders,
}: LayoutDetailsProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#000",
        },
      }}
    >
      <div style={containerStyle}>
        <Breadcrumb {...breadcrumb} />

        <Row style={{ justifyContent: "space-between" }}>
          <Title style={{ marginTop: 16, marginBottom: 24 }}>
            <b>{type}:</b> {name}
          </Title>
          <div>
            <Tooltip title="Editar">
              <EditOutlined
                style={{ fontSize: 32, cursor: "pointer", marginRight: 16 }}
              />
            </Tooltip>
            <Tooltip title="Deletar">
              <DeleteOutlined style={deleteIconStyle} />
            </Tooltip>
          </div>
        </Row>

        {lists?.length > 0 && (
          <Row gutter={24} style={{ margin: 0 }}>
            <Col span={12} style={{ paddingLeft: 0 }}>
              <List name={lists[0].name} list={lists[0].list} />
            </Col>
            {lists.length > 1 && (
              <Col span={12} style={{ paddingRight: 0 }}>
                <List name={lists[1].name} list={lists[1].list} />
              </Col>
            )}
          </Row>
        )}

        {!asset && (
          <AntDList
            header={<ListHeader quantity={assetsList?.length} name="ativos" />}
            style={{ marginTop: 24 }}
            grid={{ gutter: 16, column: 3 }}
            bordered
            dataSource={assetsList}
            renderItem={(item) => (
              <AntDList.Item>
                <AssetCard {...item} />
              </AntDList.Item>
            )}
          />
        )}

        {asset && (
          <Row gutter={24} style={{ margin: 0 }}>
            <Col span={12} style={{ paddingLeft: 0 }}>
              <AssetCard {...asset} />
            </Col>
            <Col span={12} style={{ paddingRight: 0 }}>
              <div id="asset-timeline" style={timelineStyle}>
                <Timeline
                  chartSize={{
                    width: 500,
                    height: 600,
                  }}
                  labelFormat='<span style="color:{point.color}">● </span><span style="font-weight: bold;" >{point.x:%d %b %Y}</span><br />{point.label}'
                  data={asset.healthHistory.map((item) => ({
                    name: currentState[item.status].state,
                    value: new Date(item.timestamp).getTime(),
                    color: currentState[item.status].color,
                  }))}
                />
              </div>
            </Col>
          </Row>
        )}

        {workorders &&
          workorders.map((order) => {
            const defaultChecked = [];
            order.checklist.every((check) => check.completed) &&
              defaultChecked.push(order.id + "-0");
            order.checklist.forEach(
              (check, index) =>
                check.completed && defaultChecked.push(index + "-1")
            );
            return (
              <div
                style={{ width: "50%", marginInline: "auto", marginTop: 24 }}
              >
                <Title level={4}>{order.title}</Title>
                <Text>{order.description}</Text>
                <br />
                <Text>
                  Prioridade: <Tag color="error">{order.priority}</Tag>
                </Text>
                <br />
                <br />
                <Tree
                  checkable
                  defaultExpandedKeys={[order.id + "-0"]}
                  defaultCheckedKeys={defaultChecked}
                  treeData={[
                    {
                      title: order.title,
                      key: order.id + "-0",
                      children: order.checklist.map((check, index) => {
                        return {
                          title: check.task,
                          key: index + "-1",
                          disabled: check.completed,
                        };
                      }),
                    },
                  ]}
                />
              </div>
            );
          })}
      </div>
    </ConfigProvider>
  );
}
