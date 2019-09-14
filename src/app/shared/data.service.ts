import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    text: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            text: "이 세상 누구와도 저녁을 함께 먹을 수 있다면, 누구를 택할 생각인가요?"
        },
        {
            id: 2,
            text: "유명해지고 싶나요? 어떤 방법으로요?"
        },
        {
            id: 3,
            text: "당신에게 '완벽한' 날은 어떤 날 인가요?"
        },
        {
            id: 4,
            text: "90살까지 살 수 있고 마지막 60년을 서른 살의 마음, 혹은 서른 살의 몸으로 살 수 있다고 해 봅시다. 몸과 마음 중 어느 쪽을 택할 건가요?"
        },
        {
            id: 5,
            text: "자신이 어떻게 죽을 것 같다는 직감이 있나요?"
        },
        {
            id: 6,
            text: "당신의 인생에서 가장 감사하는 일은 무엇인가요?"
        },
        {
            id: 7,
            text: "어린 시절에서 하나를 바꾼다면 어떤 걸 바꾸고 싶나요?"
        },
        {
            id: 8,
            text: "내일 침대에서 일어났을 때 새로운 능력을 갖추게 된다면 어떤 능력을 가지고 싶나요?"
        },
        {
            id: 9,
            text: "가장 소중한 기억이 뭔가요?"
        },
        {
            id: 10,
            text: "지금까지 당신 인생에서 가장 잘한 일이 어떤 건가요?"
        },
        {
            id: 11,
            text: "친구 사이에 가장 중요하게 생각하는 건 어떤 것이죠?"
        },
        {
            id: 12,
            text: "당신의 가족은 얼마나 화기애애한가요? 당신은 어린 시절을 다른 이들보다 더 행복하게 보냈다고 생각하나요?"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id?: number): IDataItem {
        if (id) {
            return this.items.filter((item) => item.id === id)[0];
        } else {
            return this.items[Math.floor(Math.random() * this.items.length)];
        }

    }
}
