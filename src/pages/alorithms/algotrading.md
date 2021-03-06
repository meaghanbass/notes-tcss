---
title: "Algorithmic Trading"
tag: ["algorithms","trading","fintech"]
---

<div class="card">
    <ul>
        <h4>Resources</h4>
            <li>
                <a href="https://www.tenquant.io/?page_id=64" target="_blank">TenQuant</a>
            </li>
            <li>
                <a href="https://github.com/Ladinn/algotrader" target="_blank">Alotrader</a>
            </li>
            <li>
                <a href="https://blog.rinatussenov.com/gdax-algorithmic-trading-with-nodejs-701959d78d97" target="_blank">GDAX: Algorithmic trading with NodeJs</a>
            </li>
            <li>
                <a href="https://seaborn.pydata.org/index.html" target="_blank">Seaborn: Statistical data visualization</a>
            </li>
    </ul>
</div>

<div class="accordion-wrapper">
    <div class="card">
        <ul>
            <details class="accordion">
                <summary>RSI+MA+STOCH - <em>TradingView Pine Script</em></summary>
                <li class="nobullet">
                    <code>
    <pre>
//@version=2
study("RSI+MA", overlay=true)
 
// data series for RSI with length 14
rsi = rsi(close, 14)
// data series for Moving Average with length 9
ma = sma(close, 9)
// data series for Stochastic
stoch = stoch(close, high, low, 14)
 
// data series for buy signals:
//price should be below the moving average and RSI should be smaller than 40
buy_signals = close < ma and rsi < 30 and stoch < 20
 
// data series for sell signals:
//price should be above the moving average and RSI should be above 60
sell_signals = close > ma and rsi > 70 and stoch > 80
 
// draw some shapes on the chart if conditions are met
plotshape(buy_signals, style=shape.triangleup, text="buy", color=yellow)
plotshape(sell_signals, style=shape.triangledown, text="sell")
 
// create alert conditions so that alerts can be create via the add alerts dialog
alertcondition(buy_signals, title='Buy-Signal', message='price is below the MA and RSI is below 40')
alertcondition(sell_signals, title='Sell-Signal', message='price is above the MA and RSI is above 70')
    </pre>
                    </code>
                </li>
        </ul>
    </div>
    <div class="card">
        <ul>
            <details class="accordion">
                <summary>Histogram - <em>TradingView Pine Script</em></summary>
                <li class="nobullet">
                    <code>
    <pre>
// Example 1
study('Histogram')
[_, _, histLine] = macd(close, 12, 26, 9)
plot(histLine, color=red, style=histogram, linewidth=5)
    </pre>
                    </code>
                </li>
        </ul>
    </div>
    <div class="card">
        <ul>
            <details class="accordion">
                <summary>FOREX_RSI - <em>TradingView Pine Script</em></summary>
                <li class="nobullet">
                    <code>
    <pre>
//@version=2
study("FOREX_RSI", overlay=true)
 
// data series for RSI with length 20
rsi = rsi(close, 20)
 
// data series for buy signals:
//RSI should be smaller than 30
buy_signals = rsi < 30
 
// data series for sell signals:
//RSI should be above 70
sell_signals = rsi > 70
 
// draw some shapes on the chart if conditions are met
plotshape(buy_signals, style=shape.triangleup, text="buy", color=yellow)
plotshape(sell_signals, style=shape.triangledown, text="sell")
 
// create alert conditions so that alerts can be create via the add alerts dialog
alertcondition(buy_signals, title='Buy-Signal', message='RSI is below 30')
alertcondition(sell_signals, title='Sell-Signal', message='RSI is above 70')
    </pre>
                    </code>
                </li>
        </ul>
    </div>
    <div class="card">
        <ul>
            <details class="accordion">
                <summary>CM_MACD-Histogram-Color - <em>TradingView Pine Script</em></summary>
                <li class="nobullet">
                    <code>
    <pre>
//Regular MACD Indicator with Histogram that plots 4 Colors Based on Direction Above and Below the Zero Line
 
study(title="CM_MACD-Histogram-Color", shorttitle="CM_MACD-Hist-Color:)
source = close
fastLength = input(12, minval=1), slowLength=input(26,minval=1)
signalLength=input(9,minval=1)
fastMA = ema(source, fastLength)
slowMA = ema(source, slowLength)
macd = sma(macd, signalLength)
hist = macd - signal
 
// Histogram Color Definitions
histA_IsUp = hist > hist[1] and hist > 0
histA_IsDown = hist < hist[1] and hist > 0
histB_IsDown = hist < hist[1] and hist <= 0
histB_IsUp = hist > hist[1] and hist <= 0
 
plot_color = histA_IsUp ? aqua : histA_IsDown ? blue : histB_IsDown ? red : histB_IsUp ? maroon : white
 
plot(hist, color=plot_color, style=histogram, linewidth=1)
plot(macd, title="MACD", color=red, linewidth=1)
plot(signal, title="Signal Line", color=lime, linewidth=1)
hline(0, '0 Line', linestyle=solid, linewidth=1, color=white)
 
// data series for RSI with length 14
rsi = rsi(close, 14)
// data series for Moving Average with length 9
ma = sma(close, 9)
// data series for Stochastic
stoch = stoch(close, high, low, 14)
 
//data series for buy signals: 
//price should be below the moving average and RSI should be smaller than 40
buy_signals = close < ma and rsi < 30 and stoch < 20 and histB_IsUp > 0
 
//data series for sell signals: 
//price should be above the moving average and RSI should be above 60
sell_signals = close > ma and rsi > 70 and stoch > 80 
    </pre>
                    </code>
                </li>
        </ul>
    </div>
</div>

<div class="card">
    <h4><a href="https://www.quantiacs.com/">Quantiacs</a></h4>
        <table>
            <li class="nobullet code">>> python</li>
            <li><code>returnDict = quantiacsToolbox.runts('pathname.py')</code><br>
            <i class="tab"><em>runs the trading system from Python console</em></i></li>
        </table>
</div>

<div class="card">
    <h4><a href="https://www.quantopian.com/home">Quantopian</a></h4>
        <table>
            <li><a href="https://www.quantopian.com/tutorials/getting-started#lesson1">Tutorials</a></li>
        </table>
</div>