import React from 'react';
import {View, Text, Pressable} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
	return(
		<DrawerContentScrollView {...props}>
			<View style={{backgroundColor: '#552DF5'}}>

				<View style={{
					flexDirection: 'row',
					alignItems: 'center',
					padding: 10
				}}>
					<View style={{
						backgroundColor: 'white', 
						width: 50,
						height: 50,
						borderRadius: 25,
						marginRight: 10
						}}>
					</View>
					<View >
						<Text style={{color: 'white', fontSize: 18}}>Larry Nxumalo</Text>
						<Text style={{color: 'lightgrey'}}>5.00 *</Text>
					</View>
				</View>

				<View style={{
					borderTopWidth: 1, 
					borderBottomWidth: 1, 
					borderColor: 'white',
					paddingVertical: 5,
					marginVertical: 10
					}}>
					<Pressable style={{
						padding:10, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'space-evenly'
						}} 
						onPress={()=> {console.warn('Messages')}}>
						<Text style={{color:'#ddd', paddingVertical: 6,}}>
							Messages
						</Text>
						<Text style={{color:'#ddd', paddingVertical: 6,}}>
							Likes
						</Text>
						<Text style={{color:'#ddd', paddingVertical: 6,}}>
							Requests
						</Text>
					</Pressable>
				</View>
				<View style={{
					borderTopWidth: 1, 
					borderBottomWidth: 1, 
					borderColor: 'white',
					paddingVertical: 5,
					marginVertical: 10
					}}>
					<Pressable style={{
						padding:10, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'space-evenly'
						}} 
						onPress={()=> {console.warn('Messages')}}>
						<Text style={{color:'#ddd', paddingVertical: 6,}}>
							Popular Spots
						</Text>
					
					</Pressable>
				</View>

				<Pressable style={{padding:10, }} onPress={()=> {console.warn('Do more')}}>
					<Text style={{color:'#ddd', paddingVertical: 6,}}>
						Do more with your account
					</Text>
				</Pressable>

				<Pressable style={{padding:10, }} onPress={()=> {console.warn('make money driving')}}>
					<Text style={{color:'white', paddingVertical: 6,}}>
						Make Money Driving
					</Text>
				</Pressable>

				<Pressable style={{padding:10, }} onPress={()=> {console.warn('make money driving')}}>
					<Text style={{color:'white', paddingVertical: 6,}}>
						Make Money Delivering
					</Text>
				</Pressable>

			</View>
			<DrawerItemList {...props}/>
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;
