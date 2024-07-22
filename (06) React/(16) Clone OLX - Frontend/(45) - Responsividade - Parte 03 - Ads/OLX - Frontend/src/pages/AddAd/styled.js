import styled from "styled-components";

export const PageArea = styled.div`
   form {
      background-color: #C1C7E0;
      border-radius: 4px;
      padding: 10px;
      box-shadow: 0px 0px 3px #999;

      .area {
         display: flex;
         align-items: center;
         padding: 10px;
         max-width: 500px;

      }
      
      .remember {
         justify-content: flex-end;

         .area--input {
            max-width: 20px;
         }
      }

      .border {
         border: 1px solid red;
      }

      .area--title {
         width: 200px;
         text-align: right;
         padding-right: 20px;
         font-weight: bold;
         font-size: 14px;
      }

      .area--input {
         flex: 1;

         input, select, textarea {
            width: 100%;
            font-size: 14px;
            padding: 5px;
            border: 1px solid #DDD;
            border-radius: 3px;
            outline: none;
            transition: all ease .4s;

            &:focus {
               border: 1px solid #333;
               color: #333;
            }
         }

         textarea {
            height: 150px;
            resize: none;
         }

         button {
            background-color: #0089FF;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #C1C7E0;
            font-size: 15px;
            cursor: pointer;

            &:hover {
               background-color: #006FCE;
            }
         }
      }
   }

   @media (max-width: 600px) {
      form {
         .area {
            flex-direction: column;

            .area--title {
               width: 100%;
               text-align: left;
               margin-bottom: 10px;
            }

            &.negotiable {
               /* border: 1px solid gold; */
               display: flex;
               align-items: center;
               justify-content: center;
               flex-direction: row;
            }

            select {
               padding: 5px;
            }

            .area--input, select {
               width: 100%;

               button {
                  width: 100%;
                  padding: 10px;
               }
            }
         }
      }
   }
`
