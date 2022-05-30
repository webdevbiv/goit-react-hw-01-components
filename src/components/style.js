import styled from '@emotion/styled'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    fontSize: 40;
    color: '#010101;
    margin-top: 60px;
    background-color: #E7ECF2;
`
export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    margin-top: 60px;
    margin-bottom: 60px;
    border-radius: 10px;
    background-color: #FFFFFF;
`
export const ProfileImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    margin-bottom: 30px;
`
export const ProfileImg = styled.img`
    height: auto;
    width: 168px;
    margin-bottom: 30px;
    border-radius: 50%;
    border: 1px solid #D9E1EA;
    margin-top: 30px;
`
export const ProfileName = styled.p`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
`
export const ProfileText = styled.p`
    margin: 0;
    text-align: center;
    font-weight: lighter;
    font-size: 18px;
`

export const ProfileStatsList = styled.ul`
    border-top: 1px solid #D9E1EA;
    margin: 0px;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: #F3F6F9;
    border-radius: 0 0 10px 10px;
`

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    align-items: center;
    width: 100%;
    font-weight: lighter;
    padding: 10px 0;
`

export const ProfileStatsCounter = styled.span`
    font-weight: bold;

`
//Statistics

export const StatisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 360px;
    margin-bottom: 60px;
`

export const StatisticsTitle = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    padding: 20px 0;
    border-bottom: 1px solid #D9E1EA;
    
`
export const StatisticsList = styled.ul`
    margin: 0px;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`
export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 100%;
    text-align: center;
`
//FriendList
export const FriendListWrapper = styled.div`
    margin-bottom: 60px;
`

export const FriendListList = styled.ul`
    list-style-type:none;
    margin: 0;
    padding: 0;
`

export const FriendListItem = styled.li`
    display: flex;

    align-items: center;
    background-color: #FFFFFF;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    width: 200px;
`

export const FriendListStatus = styled.span`
    margin-right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${item => {
        // console.log(item.status);
        if (item.status === true) {
            return 'green'
        } else {
            return 'red'
        }
    }}
`

export const FriendListImage = styled.img`
    width: 45px;
    margin-right: 20px;
`

export const FriendListName = styled.p`
    margin: 0;
    font-size: 20px;
    text-align: center;
`
